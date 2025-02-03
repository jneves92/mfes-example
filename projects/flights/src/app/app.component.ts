import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FeatureFlightsComponent } from './feature-flights/feature-flights.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeatureFlightsComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <app-feature-flights />

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'flights';
}
