import { Component } from '@angular/core';
import { StatsComponent } from '../stats/stats.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StatsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}