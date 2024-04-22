import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import data from '../../../core/data/data.json';
import { job } from '../../../core/Types/Types';
import { CommonModule, Location } from '@angular/common';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { SkeletonComponent } from '../../components/skeleton/skeleton.component';


@Component({
  selector: 'devjobs-cardbody',
  standalone: true,
  imports: [CardComponent, CommonModule,SkeletonComponent],
  templateUrl: './cardbody.component.html',
  styleUrls: ['./cardbody.component.css']
})
export class CardbodyComponent implements OnInit {
  jobs: job[] = [];
  maxItemsPerPage = 12;
  currentPage: number = 1;
  isLoading =true;

  constructor(private location: Location, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.currentPage = params['page'] ? +params['page'] : 1;
      this.loadJobs();
    });
  }
  loadJobs() {
    const startIndex = (this.currentPage - 1) * this.maxItemsPerPage;
    const endIndex = startIndex + this.maxItemsPerPage;
    this.jobs = data.slice(startIndex, endIndex);
    setTimeout(()=> {
      this.isLoading = false;
    }, 2000);
    
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
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge'
    });
  }

  filterFullTime() {
    return this.jobs.filter(job => job.contract.includes('Full Time'));
  }

}