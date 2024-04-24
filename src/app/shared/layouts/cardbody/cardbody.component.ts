import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import data from '../../../core/data/data.json';
import { job } from '../../../core/Types/Types';
import { CommonModule, Location } from '@angular/common';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { SkeletonComponent } from '../../components/skeleton/skeleton.component';
import { FilterService } from '../../../core/services/filter/filter.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'devjobs-cardbody',
  standalone: true,
  imports: [CardComponent, CommonModule, SkeletonComponent, FormsModule],
  templateUrl: './cardbody.component.html',
  styleUrls: ['./cardbody.component.css'],
  providers: [FilterService],
})
export class CardbodyComponent implements OnInit {
  jobs: job[] = [];
  isLoading = true;
  itemsPerPage = 12;
  title = '';
  locations = '';
  fullTimeOnly = false;
  showModal = false;
  showLoadMoreButton: boolean = true;
  filteredJobsCount = 0;

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.loadJobs();

    this.filterService.filteredJobs$.subscribe((filteredJobs) => {
      this.jobs = filteredJobs.slice(0, this.itemsPerPage);
    });

    this.filterService.filteredJobsCount$.subscribe((count) => {
      this.filteredJobsCount = count;
      this.showLoadMoreButton = this.filteredJobsCount < this.itemsPerPage;
    });
  }

  checked() {
    this.fullTimeOnly = !this.fullTimeOnly;
  }

  activateModal() {
    this.showModal = true;
  }

  loadJobs() {
    this.jobs = data.slice(0, this.itemsPerPage);
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  loadMore() {
    const currentPage = Math.ceil(this.jobs.length / this.itemsPerPage);
    const startIndex = currentPage * this.itemsPerPage;
    const endIndex = Math.min(
      startIndex + this.itemsPerPage,
      this.filterService.jobData.length
    );

    if (startIndex < endIndex) {
      const newJobs = this.filterService.jobData.slice(startIndex, endIndex);
      this.jobs = [...this.jobs, ...newJobs];
    }

    const element = document.getElementById('element-id');
    const distanceFromTop = element?.getBoundingClientRect().top;
    window.scrollTo({
      top: distanceFromTop,
      behavior: 'smooth',
    });
  }

  filterJobs() {
    this.title = (<HTMLInputElement>(
      document.querySelector(
        'input[placeholder="Filter by title, companies, expertise…"]'
      )
    )).value;
    this.locations = (<HTMLInputElement>(
      document.querySelector('input[placeholder="Filter by location..."]')
    )).value;
    this.filterService.filterJobsBySearch(this.title);
    this.filterService.filterJobsByLocation(this.locations);
    this.filterService.filterJobsByContract(this.fullTimeOnly);

    const filteredJobsCount = this.filterService.jobData.length;

    if (filteredJobsCount < this.itemsPerPage) {
      this.hideLoadMoreButton();
    }
  }

  hideLoadMoreButton() {
    this.showLoadMoreButton = false;
  }
}
