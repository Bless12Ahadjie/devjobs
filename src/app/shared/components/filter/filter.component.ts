import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'devjobs-filter',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

}
