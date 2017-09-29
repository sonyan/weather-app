import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ILocation } from './models/location.model';

@Injectable()
export class LocationService {

  constructor(private _http: Http) { }

  getResults(query: string): Observable<ILocation[]> {
    return this._http.get(`https://location-dot-weather-181322.appspot.com/locations/${query}`)
    .map(res => res.json());
  }

}
