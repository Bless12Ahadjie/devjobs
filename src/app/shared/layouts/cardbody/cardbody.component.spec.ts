import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CardbodyComponent} from './cardbody.component';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FilterService} from '../../../core/services/filter/filter.service';

describe('CardbodyComponent', () => {
  let component: CardbodyComponent;
  let fixture: ComponentFixture<CardbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule, FormsModule, NgOptimizedImage],
      providers: [FilterService],
    }).compileComponents();

    fixture = TestBed.createComponent(CardbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CardbodyComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component properties', () => {
    expect(component.jobs).toEqual([]);
    expect(component.isLoading).toBeTrue();
    expect(component.itemsPerPage).toEqual(12);
    expect(component.title).toEqual('');
    expect(component.locations).toEqual('');
    expect(component.fullTimeOnly).toBeFalse();
    expect(component.showModal).toBeFalse();
    expect(component.showLoadMoreButton).toBeTrue();
    expect(component.filteredJobsCount).toEqual(0);
  });

  it('should call loadJobs on ngOnInit', () => {
    spyOn(component, 'loadJobs');
    component.ngOnInit();
    expect(component.loadJobs).toHaveBeenCalled();
  });
});
