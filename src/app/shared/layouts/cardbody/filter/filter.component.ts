import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'devjobs-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  @Input() ngModel?: string;
  @Output() ngModelChange = new EventEmitter<string>();
  @Input() filterJobs!: () => void;
  @Input() ngModel_1?: string;
  @Output() ngModel_1Change = new EventEmitter<string>();
  @Input() fulltimeFilter!: () => void;
  @Input() checked!: () => void;
  @Input() ngModel_2?: boolean;
  @Output() ngModel_2Change = new EventEmitter<boolean>();
  @Input() ngModel_3?: string;
  @Output() ngModel_3Change = new EventEmitter<string>();
  @Input() activateModal!: () => void;
}
