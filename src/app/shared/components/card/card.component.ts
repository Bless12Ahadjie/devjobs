import { Component, Input } from '@angular/core';
import { Job } from '../../../core/Types/Types';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'devjobs-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() job?: Job;

  constructor(private router: Router) {}

  navigateToJobDetails() {
    this.router.navigate(['details',this.job?.id]);
  }
}
