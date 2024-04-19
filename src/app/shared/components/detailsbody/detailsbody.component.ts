import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { DataServiceService } from '../../../core/services/data-service.service';
import { job } from '../../../core/Types/Types';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'devjobs-detailsbody',
  standalone: true,
  imports: [ButtonComponent,CommonModule],
  templateUrl: './detailsbody.component.html',
  styleUrl: './detailsbody.component.css',
  providers: [DataServiceService]
})
export class DetailsbodyComponent {

  details?: job;

  constructor( private dataService: DataServiceService, private router: Router ) {}
 
  ngOnInit() {
    this.dataService.getRouteParam('id').subscribe(id => {      
      this.details = this.dataService.getJobDetails(id);
 
    });
}
goToApplyPage(applyLink: string) {
  this.router.navigate([applyLink]);
}



}
