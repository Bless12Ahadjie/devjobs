import { Component, ViewChild } from '@angular/core';
import { CardbodyComponent } from '../../layouts/cardbody/cardbody.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../../core/services/filter/filter.service';

@Component({
  selector: 'devjobs-applayout',
  standalone: true,
  imports: [CardbodyComponent, ButtonComponent, CommonModule],
  templateUrl: './applayout.component.html',
  styleUrls: ['./applayout.component.css'],
  providers: [FilterService],
})
export class ApplayoutComponent {
 btnName = 'load more';


  @ViewChild(CardbodyComponent, { static: true }) cardbodyRef?: CardbodyComponent;
  constructor(private filterService: FilterService) {}

  onLoadMore() {
    this.cardbodyRef?.loadMore();
  }

  isloading = this.cardbodyRef?.isLoading;
  
  jobLength = this.filterService.jobData.length ;
 


  
}