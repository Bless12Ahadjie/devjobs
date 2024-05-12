import {Component, OnInit, ViewChild} from '@angular/core';
import {CardbodyComponent} from '../../layouts/cardbody/cardbody.component';
import {ButtonComponent} from '../../components/button/button.component';
import {CommonModule} from '@angular/common';
import {FilterService} from '../../../core/services/filter/filter.service';

@Component({
  selector: 'devjobs-applayout',
  standalone: true,
  imports: [CardbodyComponent, ButtonComponent, CommonModule],
  templateUrl: './applayout.component.html',
  styleUrls: ['./applayout.component.css'],
  providers: [FilterService,Location],
})
export class ApplayoutComponent implements OnInit {
  btnName = 'load more';
  @ViewChild(CardbodyComponent, { static: true })
  cardbodyRef?: CardbodyComponent;


  jobLength = 0;


  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.filterService.filteredJobs$.subscribe((filteredJobs) => {
      this.jobLength = filteredJobs.length;
    });
    console.log(this.cardbodyRef?.loadMore.length);
    
  }

  onLoadMore() {
    this.cardbodyRef?.loadMore();
  }
}
