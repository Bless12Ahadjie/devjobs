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
  maxItemsPerPage = 12;
  currentPage: number = 1;
  isLoading = true;

  title = '';
  locations = '';
  fullTimeOnly = false;
  showModal = false;

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const page = params['page'];
      this.currentPage = page ? Number(page) || 1 : 1;
      this.loadJobs();
    });
  
    this.filterService.filteredJobs$.subscribe((filteredJobs) => {
      this.jobs = filteredJobs;
    });
  }

  checked() {
    this.fullTimeOnly = !this.fullTimeOnly;
  }

  activateModal() {
    this.showModal = true;
  }

  loadJobs() {
    const startIndex = (this.currentPage - 1) * this.maxItemsPerPage;
    const endIndex = startIndex + this.maxItemsPerPage;
    this.jobs = data.slice(startIndex, endIndex);
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  loadMore() {
    this.currentPage++;
    this.saveCurrentPage();
    this.loadJobs();
    this.updateUrlWithPageParam();
  }

  private saveCurrentPage() {
    localStorage.setItem('currentPage', this.currentPage.toString());
  }

  private updateUrlWithPageParam() {
    const navigationExtras: NavigationExtras = {
      relativeTo: this.route,
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge',
    };
  
    this.router.navigate([], navigationExtras);
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
  }
}
