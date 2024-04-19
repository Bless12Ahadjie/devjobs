import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import data from '../../../core/data/data.json';
import { job } from '../../../core/Types/Types';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'devjobs-cardbody',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './cardbody.component.html',
  styleUrls: ['./cardbody.component.css']
})
export class CardbodyComponent implements OnInit {
  jobs: job[] = [];
  maxItemsPerPage = 12;
  currentPage: number = 1;

  constructor(private location: Location) {}

  ngOnInit() {
    this.currentPage = this.getInitialPage();
    this.loadJobs();
  }

  loadJobs() {
    const startIndex = (this.currentPage - 1) * this.maxItemsPerPage;
    const endIndex = startIndex + this.maxItemsPerPage;
    this.jobs = data.slice(startIndex, endIndex);
  }

  loadMore() {
    this.currentPage++;
    this.saveCurrentPage();
    this.loadJobs();
  }

  navigateBack() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.saveCurrentPage();
      this.loadJobs();
    } else {
      this.location.back();
    }
  }

  private getInitialPage(): number {
    const storedPage = localStorage.getItem('currentPage');
    return storedPage ? parseInt(storedPage) : 1;
  }

  private saveCurrentPage() {
    localStorage.setItem('currentPage', this.currentPage.toString());
  }
}