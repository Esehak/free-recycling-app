var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { FormBuilder } from '@angular/forms';
import { LocationService } from '../services/location.service';
import { Router } from "@angular/router";
export var AdvancedSearchComponent = (function () {
    function AdvancedSearchComponent(formBuilder, locationService, router) {
        var _this = this;
        this.locationService = locationService;
        this.router = router;
        this.filteredCities = [];
        this.stateSubscription = this.locationService
            .getAllStates("http://localhost:3000/api/location")
            .subscribe(function (response) {
            _this.statesList = response.json();
        });
        this.myForm = formBuilder.group({
            'state': [''],
            'city': [''],
            'name': ['']
        });
    }
    AdvancedSearchComponent.prototype.onFormSubmit = function () {
        var formValue = this.myForm.value;
        this.router.navigate(['items', 'search', formValue.state, formValue.city, formValue.name]);
    };
    AdvancedSearchComponent.prototype.onStateSelected = function (state) {
        var _this = this;
        this.citySubscription = this.locationService
            .getAllCities("http://localhost:3000/api/location/cities/" + state)
            .subscribe(function (response) {
            _this.filteredCities = response.json();
        });
    };
    AdvancedSearchComponent.prototype.ngOnInit = function () { };
    AdvancedSearchComponent.prototype.ngOnDestroy = function () {
        this.stateSubscription.unsubscribe();
        this.citySubscription.unsubscribe();
    };
    AdvancedSearchComponent = __decorate([
        Component({
            selector: 'advanced-search',
            templateUrl: './item.search.component.html',
            styleUrls: ['./item.search.component.css']
        }), 
        __metadata('design:paramtypes', [FormBuilder, LocationService, Router])
    ], AdvancedSearchComponent);
    return AdvancedSearchComponent;
}());
//# sourceMappingURL=/Users/gedionz/Documents/Courses/Modern Web Application/free-recycling-app/spa-client/src/app/search/item.search.component.js.map