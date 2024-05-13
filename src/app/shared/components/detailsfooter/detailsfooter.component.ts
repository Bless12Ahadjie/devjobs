import {Component, inject,OnInit} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {Job} from '../../../core/Types/Types';
import {DataService} from '../../../core/services/data/data.service';

@Component({
  selector: 'devjobs-detailsfooter',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './detailsfooter.component.html',
  styleUrl: './detailsfooter.component.css',
  providers:[DataService]
})
export class DetailsfooterComponent implements OnInit{
  details?: Job ;

  private dataService = inject(DataService)

  ngOnInit() {
    this.dataService.getRouteParam('id').subscribe(id => {
      this.details = this.dataService.getJobDetails(id);

    });

  }
}
