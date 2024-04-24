import { Component, ViewChild, OnInit } from '@angular/core';
import { CardbodyComponent } from '../../layouts/cardbody/cardbody.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../../core/services/filter/filter.service';
import { flatMap } from 'rxjs';

@Component({
  selector: 'devjobs-applayout',
  standalone: true,
  imports: [CardbodyComponent, ButtonComponent, CommonModule],
  templateUrl: './applayout.component.html',
  styleUrls: ['./applayout.component.css'],
  providers: [FilterService],
})
export class ApplayoutComponent implements OnInit {
  btnName = 'load more';
  @ViewChild(CardbodyComponent, { static: true })
  cardbodyRef?: CardbodyComponent;

  isLoading = false;
  jobLength = 0;
  showLoadMoreButton = false;
  filteredJobsCount?: number;

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.filterService.filteredJobs$.subscribe((filteredJobs) => {
      this.jobLength = filteredJobs.length;
    });
  }

  onLoadMore() {
    this.cardbodyRef?.loadMore();
  }
}
