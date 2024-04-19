import { Component, ViewChild } from '@angular/core';
import { FilterComponent } from '../../components/filter/filter.component';
import { CardbodyComponent } from '../../layouts/cardbody/cardbody.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'devjobs-applayout',
  standalone: true,
  imports: [CardbodyComponent, FilterComponent, ButtonComponent, CommonModule],
  templateUrl: './applayout.component.html',
  styleUrls: ['./applayout.component.css']
})
export class ApplayoutComponent {
  @ViewChild(CardbodyComponent, { static: true }) cardbodyRef?: CardbodyComponent;

  onLoadMore() {
    this.cardbodyRef?.loadMore();
  }
}