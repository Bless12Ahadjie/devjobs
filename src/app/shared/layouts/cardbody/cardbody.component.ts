import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import  data from '../../../core/data/data.json';
import { job } from '../../../core/Types/Types';

@Component({
  selector: 'devjobs-cardbody',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cardbody.component.html',
  styleUrl: './cardbody.component.css'
})
export class CardbodyComponent {
  item = data.slice(0,12)
  jobs: job[] = [];

  constructor() {}

  ngOnInit() {
    this.jobs = this.item;
  }
}
