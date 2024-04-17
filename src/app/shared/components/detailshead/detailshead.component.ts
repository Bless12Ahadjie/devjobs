import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../../core/services/data-service.service';
import { job } from '../../../core/Types/Types';

@Component({
  selector: 'devjobs-detailshead',
  standalone: true,
  imports: [ButtonComponent,CommonModule],
  templateUrl: './detailshead.component.html',
  styleUrl: './detailshead.component.css',
  providers: [DataServiceService]
})
export class DetailsheadComponent {
 details?: job;

 constructor( private dataService: DataServiceService ) {}

 ngOnInit() {
   this.dataService.getRouteParam('id').subscribe(id => {      
     this.details = this.dataService.getJobDetails(id);

   });
   
 }

}
