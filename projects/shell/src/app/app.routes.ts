import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'flights',
    loadComponent: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'flights',
      exposedModule: './FlightsPage'
    }).then(m => m.FeatureFlightsComponent)
  }
];
