import { Routes } from '@angular/router';
import { JobdetailsComponent } from './shared/layouts/jobdetails/jobdetails.component';
import { ApplayoutComponent } from './shared/pages/applayout/applayout.component';

export const routes: Routes = [
    {'path': '' , component: ApplayoutComponent},
    {'path': 'details' , component: JobdetailsComponent},
];
