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
import { Router } from "@angular/router";
export var NavigationComponent = (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    NavigationComponent.prototype.pickCurrentLocation = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            position.coords.longitude;
            position.coords.latitude;
            var coords = {
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            };
            _this.router.navigate(['items', coords]);
        }, function (errorMessage) { return console.log(errorMessage); });
    };
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.ngOnDestroy = function () {
    };
    NavigationComponent = __decorate([
        Component({
            selector: 'navigation',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.component.css']
        }), 
        __metadata('design:paramtypes', [Router])
    ], NavigationComponent);
    return NavigationComponent;
}());
//# sourceMappingURL=/Users/gedionz/Documents/Courses/Modern Web Application/free-recycling-app/spa-client/src/app/navigation/navigation.component.js.map