import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'devjobs-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() ngModel?: string;
  @Output() ngModelChange = new EventEmitter<string>();
  @Input() filterJobs!: () => void;
  @Input() checked!: () => void;
  @Input() ngModel_1?: boolean;
  @Output() ngModel_1Change = new EventEmitter<boolean>();
  @Input() showModal?: boolean;


}
