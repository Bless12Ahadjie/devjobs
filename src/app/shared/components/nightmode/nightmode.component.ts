import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'devjobs-nightmode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nightmode.component.html',
  styleUrl: './nightmode.component.css'
})
export class NightmodeComponent {
  isDarkMode = false;

  ngOnInit() {
    this.isDarkMode = localStorage.getItem('isDarkMode') === 'dark' ? true : false;
    this.applyDarkMode();
  }


  toggleDarkMode = () => {
    this.isDarkMode = !this.isDarkMode;
    this.applyDarkMode();
  };


  private applyDarkMode() {
    localStorage.setItem('isDarkMode', this.isDarkMode? 'dark' : 'light');
    document.body.classList.toggle('dark', this.isDarkMode);
  }


}
