import { Injectable } from '@angular/core';import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IForecast } from './models/forecast.model';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getForecasts(city: string, state: string): Observable<IForecast[]> {
    return this._http.get(`https://forecast-dot-weather-181322.appspot.com/${city}/${state}`)
    .map(res => res.json());
  }

}
