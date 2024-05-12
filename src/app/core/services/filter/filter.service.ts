import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import data from '../../data/data.json';
import { Job } from '../../Types/Types';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public jobData: Job[] = [];
  public filteredJobsSource = new BehaviorSubject<Job[]>([]);
  public filteredJobsCountSource = new BehaviorSubject<number>(0);

  filteredJobs$: Observable<Job[]> = this.filteredJobsSource.asObservable();
  filteredJobsCount$ = this.filteredJobsCountSource.asObservable();

  title = '';
  location = '';
  isFullTime = false;

  constructor() {
    this.jobData = data;
    this.filteredJobsSource.next(this.jobData);
    this.filteredJobsCountSource.next(this.jobData.length);

    // Retrieve the filtered job data from the history state
    const state = history.state?.filterCriteria;
    if (state) {
      const { title, location, isFullTime } = state;
      this.title = title;
      this.location = location;
      this.isFullTime = isFullTime;
      this.applyFilters();
    }
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
      filteredJobs = filteredJobs.filter((job) =>
        job.company?.toLowerCase().includes(this.title.toLowerCase()) ||
      job.position?.toLowerCase().includes(this.title.toLowerCase())
      );
    }

    if (this.location) {
      filteredJobs = filteredJobs.filter((job) =>
        job.location?.toLowerCase().includes(this.location.toLowerCase())
      );
    }

    if (this.isFullTime) {
      filteredJobs = filteredJobs.filter((job) => job.contract === 'Full Time');
    }

    // Store the filtered job data and filter criteria in the history state
    history.replaceState(
      { filterCriteria: { title: this.title, location: this.location, isFullTime: this.isFullTime } },
      '',
      ''
    );

    this.filteredJobsSource.next(filteredJobs);
    this.filteredJobsCountSource.next(filteredJobs.length);
  }

  private filterByTitleOrCompany(job: Job): boolean {
    return (
      (job.position?.toLowerCase().includes(this.title.toLowerCase()) || false) ||
      (job.company?.toLowerCase().includes(this.title.toLowerCase()) || false)
    );
  }
}
