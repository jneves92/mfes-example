import { Component } from '@angular/core';
import { UserAuthComponent } from 'auth-lib';

@Component({
  selector: 'app-feature-flights',
  imports: [UserAuthComponent],
  templateUrl: './feature-flights.component.html',
  styleUrls: ['./feature-flights.component.css']
})
export class FeatureFlightsComponent {

}
