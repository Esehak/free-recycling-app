import {OnDestroy, OnInit, Component} from "@angular/core";
import {FormBuilder, FormGroup} from '@angular/forms'
import { LocationService } from '../services/location.service';
import {Subscription} from "rxjs";
import {Response} from "@angular/http";
import {Router} from "@angular/router";
@Component({
  selector : 'advanced-search',
  templateUrl : './item.search.component.html',
  styleUrls : ['./item.search.component.css']
})
export class AdvancedSearchComponent implements OnInit, OnDestroy {
  myForm : FormGroup;
  statesList;
  stateSubscription : Subscription;
  citySubscription : Subscription;
  filteredCities = [];
  constructor(formBuilder : FormBuilder, private locationService : LocationService, private router : Router) {
    this.stateSubscription = this.locationService
      .getAllStates("http://localhost:3000/api/location")
      .subscribe(
        (response : Response) => {
          this.statesList = response.json();
        }
      );
    this.myForm = formBuilder.group(
      {
        'state' : [''],
        'city' : [''],
        'name': ['']
      }
    );
  }

  onFormSubmit() {
    var formValue = this.myForm.value;
    this.router.navigate(['items','search', formValue.state, formValue.city, formValue.name]);
  }

  onStateSelected(state:string) {
    this.citySubscription = this.locationService
      .getAllCities(`http://localhost:3000/api/location/cities/${state}`)
      .subscribe(
        (response : Response) => {
          this.filteredCities = response.json();
        }
      );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.stateSubscription.unsubscribe();
    this.citySubscription.unsubscribe();
  }
}
