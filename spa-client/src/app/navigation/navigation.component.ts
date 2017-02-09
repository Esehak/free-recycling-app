import {Component, OnInit, OnDestroy } from "@angular/core";
import {LocationService} from "../services/location.service";
import {Response} from "@angular/http";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector : 'navigation',
  templateUrl : './navigation.component.html',
  styleUrls : ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

  constructor(private router : Router) {

  }

  pickCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      position => {
        position.coords.longitude;
        position.coords.latitude;
        var coords = {
          longitude : position.coords.longitude,
          latitude : position.coords.latitude
        };

        this.router.navigate(['items', coords]);
      },
      errorMessage => console.log(errorMessage)
    );
  }



  ngOnInit() {

  }


  ngOnDestroy() {
  }
}
