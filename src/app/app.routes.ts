import { Routes } from '@angular/router';
import { JobdetailsComponent } from './shared/pages/jobdetails/jobdetails.component';
import { ApplayoutComponent } from './shared/pages/applayout/applayout.component';
import { SkeletonComponent } from './shared/components/skeleton/skeleton.component';

export const routes: Routes = [
    {'path': '' , component: ApplayoutComponent},
    {'path': 'details/:id' , component: JobdetailsComponent},
];
