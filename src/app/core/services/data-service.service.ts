import { Injectable } from '@angular/core';
import data from '../data/data.json';
import { job } from '../Types/Types';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor(private route: ActivatedRoute) {}

  getJobDetails(id: number): job {
    return data[id-1];
    
  }

  getRouteParam(paramName: string): Observable<number> {
    return this.route.paramMap.pipe(
      map(params => {
        return Number(params.get(paramName));
      })
    );
  
  }

    
}