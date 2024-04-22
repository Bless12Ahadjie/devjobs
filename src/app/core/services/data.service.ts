import { Injectable } from '@angular/core';
import data from '../data/data.json';
import { job } from '../Types/Types';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private route: ActivatedRoute) {}

  private jobData: job[] = [];
  private filteredJobsSource = new BehaviorSubject<any[]>([]);
  public filteredJobs$ = this.filteredJobsSource.asObservable();

 public setJobData(data: job[]): void {
    this.jobData = data;
  }

 public getJobData(): job[] {
    return this.jobData;
  }

 public getJobDetails(id: number): job {
    return data[id - 1];
  }

 public getRouteParam(paramName: string): Observable<number> {
    return this.route.paramMap.pipe(
      map(params => {
        return Number(params.get(paramName));
      })
    );
  }
  filterJobsByContract(contractType: string): void {
    const filteredJobs = contractType
      ? this.jobData.filter(job => job.contract === contractType)
      : this.jobData;
    this.filteredJobsSource.next(filteredJobs);
  }

  filterJobsBySearch(searchTerm: string): void {

    
    const filteredJobs = this.jobData.filter(job =>
      job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    this.filteredJobsSource.next(filteredJobs);
  }

  filterJobsByLocation(location: string): void {
    const filteredJobs = this.jobData.filter(job => job.location === location);
    this.filteredJobsSource.next(filteredJobs);
  }
  
}
