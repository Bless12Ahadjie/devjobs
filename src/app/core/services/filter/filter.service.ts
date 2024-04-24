import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import data from '../../data/data.json';
import { job } from '../../Types/Types';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public jobData: job[] = [];

  public filteredJobsSource = new BehaviorSubject<job[]>([]);
  public filteredJobsCountSource = new BehaviorSubject<number>(0);

  filteredJobs$ = this.filteredJobsSource.asObservable();
  filteredJobsCount$ = this.filteredJobsCountSource.asObservable();

  title = '';
  location = '';
  isFullTime = false;

  constructor() {
    this.jobData = data;
    this.filteredJobsSource.next(this.jobData);
    this.filteredJobsCountSource.next(this.jobData.length);
  }

  filterJobsBySearch(searchTerm: string): void {
    this.title = searchTerm;
    this.applyFilters();
  }

  filterJobsByLocation(location: string): void {
    this.location = location;
    this.applyFilters();
  }

  filterJobsByContract(isFullTime: boolean): void {
    this.isFullTime = isFullTime;
    this.applyFilters();
  }

  private applyFilters(): void {
    let filteredJobs = this.jobData;

    if (this.title) {
      filteredJobs = filteredJobs.filter(
        (job) =>
          job.position.toLowerCase().includes(this.title.toLowerCase()) ||
          job.company.toLowerCase().includes(this.title.toLowerCase())
      );
    }

    if (this.location) {
      filteredJobs = filteredJobs.filter((job) =>
        job.location.toLowerCase().includes(this.location.toLowerCase())
      );
    }
    if (this.isFullTime) {
      filteredJobs = filteredJobs.filter((job) => job.contract === 'Full Time');
    }

    this.filteredJobsSource.next(filteredJobs);
    this.filteredJobsCountSource.next(filteredJobs.length);
  }
}
