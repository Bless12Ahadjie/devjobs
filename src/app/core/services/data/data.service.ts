import { Injectable } from '@angular/core';
import data from '../../data/data.json';
import { Job } from '../../Types/Types';
import { ActivatedRoute } from '@angular/router';
import { Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private route: ActivatedRoute) {}

  private jobData: Job[] = [];

  setJobData(data: Job[]): void {
    this.jobData = data;
  }

  public getJobData(): Job[] {
    return this.jobData;
  }

  public getJobDetails(id: number): Job {
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
