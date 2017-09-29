import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';

import { ILocation } from '../models/location.model';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent {

  selectedLocation: ILocation;
  results: ILocation[];

  constructor(private _locationService: LocationService, private _router: Router) {}
  
  search(event) {
    this._locationService.getResults(event.query).subscribe(data => {
      this.results = data;
    });
  }

  handleSelect(location: ILocation) {
    this._router.navigateByUrl(`/forecast/${location.city}/${location.state}`);
  }

}
