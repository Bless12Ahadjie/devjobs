import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'devjobs-nightmode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nightmode.component.html',
  styleUrl: './nightmode.component.css',
})
export class NightmodeComponent implements OnInit{
  isDarkMode = false;

  ngOnInit() {
    this.isDarkMode =
      localStorage.getItem('isDarkMode') === 'dark';
    this.applyDarkMode();
  }

  toggleDarkMode = () => {
    this.isDarkMode = !this.isDarkMode;
    this.applyDarkMode();
  };

  private applyDarkMode() {
    localStorage.setItem('isDarkMode', this.isDarkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark', this.isDarkMode);
  }
}
