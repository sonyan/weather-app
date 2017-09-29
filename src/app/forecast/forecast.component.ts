import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WeatherService } from '../weather.service';

import { IForecast, Condition } from '../models/forecast.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  city: string;
  state: string;
  forecasts: IForecast[];

  Condition = Condition;

  constructor(private _route: ActivatedRoute, private _weather: WeatherService) { }

  ngOnInit() {
    this.city = this._route.snapshot.params['city'];
    this.state = this._route.snapshot.params['state'];
    this._weather.getForecasts(this.city, this.state).subscribe(forecasts => {
      this.forecasts = forecasts;
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);

    return `${date.getDate()}/${date.getMonth()+1}`;
  }

}
