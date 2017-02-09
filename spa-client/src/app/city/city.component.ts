import {Component, OnInit, OnDestroy } from "@angular/core";
import {LocationService} from "../services/location.service";
import {Response} from "@angular/http";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector : 'cities',
  templateUrl : './city.component.html',
  styleUrls : ['./city.component.css']
})
export class CitiesComponent implements OnInit, OnDestroy {
  routeSubscription : Subscription;
  locationSubscription : Subscription;

  selectedState : string;
  cityList : Array<string> = [];

  constructor(private locationService : LocationService, private route : ActivatedRoute, private router : Router) {
    this.routeSubscription = this.route.params.subscribe(params => {

      this.selectedState = params['state'];
      this.locationSubscription = this.locationService
        .getAllCities(`http://localhost:3000/api/location/cities/${this.selectedState}`)
        .subscribe(
          (response : Response) => {
            this.cityList = response.json();
          }
      );
    });

  }

  ngOnInit() {

  }
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.locationSubscription.unsubscribe();
  }

  onCitySelected(city : string) {
    this.router.navigate(['/items', this.selectedState, city])
  }
}
