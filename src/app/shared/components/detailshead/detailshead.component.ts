import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'devjobs-detailshead',
  standalone: true,
  imports: [ButtonComponent,CommonModule],
  templateUrl: './detailshead.component.html',
  styleUrl: './detailshead.component.css'
})
export class DetailsheadComponent {

}
