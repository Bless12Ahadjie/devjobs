import { Component, ViewChild } from '@angular/core';
import { CardbodyComponent } from '../../layouts/cardbody/cardbody.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'devjobs-applayout',
  standalone: true,
  imports: [CardbodyComponent, ButtonComponent, CommonModule],
  templateUrl: './applayout.component.html',
  styleUrls: ['./applayout.component.css']
})
export class ApplayoutComponent {
 btnName = 'load more';

  @ViewChild(CardbodyComponent, { static: true }) cardbodyRef?: CardbodyComponent;

  onLoadMore() {
    this.cardbodyRef?.loadMore();
  }

  isloading = this.cardbodyRef?.isLoading;
}