import { Injectable } from '@angular/core';
import data from '../../data/data.json';
import { job } from '../../Types/Types';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  
  constructor(private route: ActivatedRoute) {}

  private jobData: job[] = [];

  setJobData(data: job[]): void {
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
      map((params) => {
        return Number(params.get(paramName));
      })
    );
  }
}
