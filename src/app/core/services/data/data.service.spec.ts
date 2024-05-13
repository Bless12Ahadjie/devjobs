import {TestBed} from '@angular/core/testing';
import {DataService} from './data.service';
import {Job} from '../../Types/Types';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable, of} from 'rxjs';

describe('DataService', () => {
  let service: DataService;
  let activatedRouteMock:  { paramMap: Observable<ParamMap>; };

  // executed before each spec (test)
  beforeEach(() => {
    // return a fixed value '1' for any parameter when paramMap is accessed
    activatedRouteMock = {
      paramMap: of({
        get: (param: string) => '1'
      } as ParamMap)
    };

    TestBed.configureTestingModule({
      providers: [
        DataService,
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
    });
    service = TestBed.inject(DataService);
  });


  it('should correctly set data to job data', () => {
    const data: Job[] = [
      {
        id: 1,
        position: 'Software Engineer',
        company: 'Amalitech',
        location: 'New York',
        contract: 'Full Time',
      },
    ];
    service.setJobData(data);
    expect(service.getJobData()).toEqual(data);
  });

  it('should get route param as an observable', () => {
    const testParam = 'id';

    service.getRouteParam(testParam).subscribe((result) => {
      expect(result).toEqual(1);
    });
  });

});
