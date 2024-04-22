import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../core/services/data/data.service';
import { job } from '../../../core/Types/Types';

@Component({
  selector: 'devjobs-detailshead',
  standalone: true,
  imports: [ButtonComponent,CommonModule],
  templateUrl: './detailshead.component.html',
  styleUrl: './detailshead.component.css',
  providers: [DataService]
})
export class DetailsheadComponent {
 details?: job;

 constructor( private dataService: DataService ) {}

 ngOnInit() {
   this.dataService.getRouteParam('id').subscribe(id => {      
     this.details = this.dataService.getJobDetails(id);

   });
   
 }

}
