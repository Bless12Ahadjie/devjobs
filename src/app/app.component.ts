import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { ApplayoutComponent } from './shared/pages/applayout/applayout.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,ApplayoutComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CommonModule]
})
export class AppComponent  {

  title = 'devjobs';

}
