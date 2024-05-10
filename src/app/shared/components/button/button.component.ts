import {Component, Input} from '@angular/core';
import {DataService} from '../../../core/services/data/data.service';

@Component({
  selector: 'devjobs-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  providers: [DataService]
})
export class ButtonComponent {

  @Input() btnName?: string;
  @Input() href: string | undefined;


}
