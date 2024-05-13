import { Component } from '@angular/core';
import { NightmodeComponent } from '../../components/nightmode/nightmode.component';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'devjobs-header',
  standalone: true,
  imports: [NightmodeComponent, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navigateToHome(){
    window.location.href = '';
  }
}
