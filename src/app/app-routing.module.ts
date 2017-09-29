import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForecastComponent } from './forecast/forecast.component';
import { LocationSearchComponent } from './location-search/location-search.component';

const routes: Routes = [
  { path: 'forecast/:city/:state', component: ForecastComponent },
  { path: '', component: LocationSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
