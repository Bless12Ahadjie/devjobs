import { FilterService } from './filter.service';
import { job } from '../../Types/Types';
import { TestBed } from '@angular/core/testing';

describe('FilterService', () => {
  let service: FilterService;
  const jobData: job[] = [
    {
      id: 1,
      position: 'Software Engineer',
      company: 'Amalitech',
      location: 'New York',
      contract: 'Full Time',
    },
    {
      id: 2,
      position: 'Product Manager',
      company: 'Hubtel',
      location: 'San Francisco',
      contract: 'Part Time',
    },
    {
      id: 3,
      position: 'Sales Representative',
      company: 'Vector',
      location: 'Los Angeles',
      contract: 'Full Time',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterService);
    service.jobData = jobData;
  });

  it('should filter jobs by search term', () => {
    const searchTerm = 'Software';
    service.filterJobsBySearch(searchTerm);
    expect(service.jobData[0]).toEqual(jobData[0]);

    const searchTerm2 = 'Amalitech';
    service.filterJobsBySearch(searchTerm2);
    expect(service.jobData[0]).toEqual(jobData[0]);
  });

  it('should filter jobs by location', () => {
    const location = 'New York';
    service.filterJobsByLocation(location);
    expect(service.jobData[0].location?.toLocaleLowerCase()).toContain(
      location.toLocaleLowerCase()
    );

    const location2 = 'San Francisco';
    service.filterJobsByLocation(location2);
    expect(service.jobData[1].location?.toLocaleLowerCase()).toContain(
      location2.toLocaleLowerCase()
    );

    const location3 = 'Los Angeles';
    service.filterJobsByLocation(location3);
    expect(service.jobData[2].location?.toLocaleLowerCase()).toContain(
      location3.toLocaleLowerCase()
    );
  });

  it('should filter full-time jobs only', () => {
    service.filterJobsByContract(true);
    expect(service.jobData[0].contract?.toLocaleLowerCase()).toContain(
      'full time'
    );
  });
});
