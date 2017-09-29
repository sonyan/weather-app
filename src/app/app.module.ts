import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LocationService } from './location.service';
import { WeatherService } from './weather.service';
import { ForecastComponent } from './forecast/forecast.component';
import { LocationSearchComponent } from './location-search/location-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    LocationSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AutoCompleteModule,
    AppRoutingModule
  ],
  providers: [LocationService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
