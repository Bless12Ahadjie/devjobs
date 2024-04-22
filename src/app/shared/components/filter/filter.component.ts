import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../core/services/data/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'devjobs-filter',
  standalone: true,
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [DataService]
})
export class FilterComponent {
  title = "";
  location = "";
  isChecked = false;
  filteredJobs: any[] = [];
  private subscription: Subscription | null = null;

  constructor(private dataService: DataService) {}


  checked() {
    this.isChecked = !this.isChecked;
    this.filterJobs();
  }

  filterJobs() {

  }
}