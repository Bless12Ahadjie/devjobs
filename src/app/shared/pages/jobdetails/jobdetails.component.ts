import { Component } from '@angular/core';
import { DetailsheadComponent } from '../../components/detailshead/detailshead.component';
import { DetailsbodyComponent } from '../../components/detailsbody/detailsbody.component';
import { DetailsfooterComponent } from '../../components/detailsfooter/detailsfooter.component';

@Component({
  selector: 'devjobs-jobdetails',
  standalone: true,
  imports: [DetailsheadComponent,DetailsbodyComponent,DetailsfooterComponent],
  templateUrl: './jobdetails.component.html',
  styleUrl: './jobdetails.component.css'
})
export class JobdetailsComponent {

}
