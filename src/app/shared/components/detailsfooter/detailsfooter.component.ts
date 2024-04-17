import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { job } from '../../../core/Types/Types';
import { DataServiceService } from '../../../core/services/data-service.service';

@Component({
  selector: 'devjobs-detailsfooter',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './detailsfooter.component.html',
  styleUrl: './detailsfooter.component.css',
  providers:[DataServiceService]
})
export class DetailsfooterComponent {
  details?: job ;

  constructor( private dataService: DataServiceService ) {}

  ngOnInit() {
    this.dataService.getRouteParam('id').subscribe(id => {      
      this.details = this.dataService.getJobDetails(id);

    });
    
  }
}
