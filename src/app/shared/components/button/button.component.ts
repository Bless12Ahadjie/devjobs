import { Component, Input,inject } from '@angular/core';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'devjobs-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  providers: [DataService]
})
export class ButtonComponent {
  dataService = inject ( DataService);

  @Input() btnName?: string;
  @Input() href: string | undefined;
 

     handleClick = () => {}

     filterFullTime() {
    
      
     }
}
