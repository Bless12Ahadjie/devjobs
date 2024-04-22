import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { DataService } from '../../../core/services/data/data.service';
import { job } from '../../../core/Types/Types';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'devjobs-detailsbody',
  standalone: true,
  imports: [ButtonComponent,CommonModule],
  templateUrl: './detailsbody.component.html',
  styleUrl: './detailsbody.component.css',
  providers: [DataService]
})
export class DetailsbodyComponent {

  details?: job;

  constructor( private dataService: DataService, private router: Router ) {}
 
  ngOnInit() {
    this.dataService.getRouteParam('id').subscribe(id => {      
      this.details = this.dataService.getJobDetails(id);
 
    });
}
goToApplyPage(applyLink: string) {
  this.router.navigate([applyLink]);
}



}
