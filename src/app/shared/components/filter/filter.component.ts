import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'devjobs-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [DataService]
})
export class FilterComponent {
  title = "";
  location = "";
  isChecked = false;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
  this.dataService.filteredJobs$.subscribe((data:any) => {
  this.title = data.title;
  
})
    
  }

  checked() {
    this.isChecked = !this.isChecked;
  }

  filterFullTime() {
    if (this.isChecked) {
      this.dataService.filterJobsByContract('Full Time');
    } else {
      this.dataService.filterJobsByContract('');
    }
  }

  filterJobsBySearch() {
    console.log('sdfdsfs');
    
    this.dataService.filterJobsBySearch(this.title);
  }
}