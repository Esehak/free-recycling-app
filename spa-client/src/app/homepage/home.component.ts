import {Component, OnInit, OnDestroy } from "@angular/core";
import {LocationService} from "../services/location.service";
import {Response} from "@angular/http";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector : 'home',
  templateUrl : './home.component.html',
  styleUrls : ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  stateList : Array<string> = [];
  subscription : Subscription;

  constructor(private locationService : LocationService, private router : Router) {
    this.subscription = this.locationService
      .getAllStates("http://localhost:3000/api/location")
      .subscribe(
        (response : Response) => {
          this.stateList = response.json();
        },
        error => console.log(error)
    );
  }

  ngOnInit() {

  }
  onStateClick(state : string) {
    this.router.navigate(['/cities', state])
    return false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
