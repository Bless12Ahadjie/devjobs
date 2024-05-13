import { Component } from '@angular/core';
import { NightmodeComponent } from '../../components/nightmode/nightmode.component';

@Component({
  selector: 'devjobs-header',
  standalone: true,
  imports: [NightmodeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navigateToHome(){
    window.location.href = '';
  }
}
