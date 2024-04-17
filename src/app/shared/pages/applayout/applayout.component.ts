import { Component } from '@angular/core';
import { FilterComponent } from '../../components/filter/filter.component';
import { CardbodyComponent } from '../../layouts/cardbody/cardbody.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'devjobs-applayout',
  standalone: true,
  imports: [FilterComponent,CardbodyComponent,ButtonComponent],
  templateUrl: './applayout.component.html',
  styleUrl: './applayout.component.css'
})
export class ApplayoutComponent {

}
