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
import { LocationService } from "../services/location.service";
import { ActivatedRoute, Router } from "@angular/router";
export var CitiesComponent = (function () {
    function CitiesComponent(locationService, route, router) {
        var _this = this;
        this.locationService = locationService;
        this.route = route;
        this.router = router;
        this.cityList = [];
        this.routeSubscription = this.route.params.subscribe(function (params) {
            _this.selectedState = params['state'];
            _this.locationSubscription = _this.locationService
                .getAllCities("http://localhost:3000/api/location/cities/" + _this.selectedState)
                .subscribe(function (response) {
                _this.cityList = response.json();
            });
        });
    }
    CitiesComponent.prototype.ngOnInit = function () {
    };
    CitiesComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
        this.locationSubscription.unsubscribe();
    };
    CitiesComponent.prototype.onCitySelected = function (city) {
        this.router.navigate(['/items', this.selectedState, city]);
    };
    CitiesComponent = __decorate([
        Component({
            selector: 'cities',
            templateUrl: './city.component.html',
            styleUrls: ['./city.component.css']
        }), 
        __metadata('design:paramtypes', [LocationService, ActivatedRoute, Router])
    ], CitiesComponent);
    return CitiesComponent;
}());
//# sourceMappingURL=/Users/gedionz/Documents/Courses/Modern Web Application/free-recycling-app/spa-client/src/app/city/city.component.js.map