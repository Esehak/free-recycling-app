var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MyRoutes } from "./app.routes";
import { HomeComponent } from "./homepage/home.component";
import { LocationService } from "./services/location.service";
import { ItemService } from "./services/item.service";
import { CitiesComponent } from "./city/city.component";
import { ItemsComponent } from "./item/item.component";
import { ItemDetailsComponent } from "./item/item.detail.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { LoginComponent } from "./login.component";
import { AdvancedSearchComponent } from "./search/item.search.component";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent, HomeComponent, CitiesComponent, ItemsComponent, NavigationComponent, LoginComponent, AdvancedSearchComponent, ItemDetailsComponent
            ],
            imports: [
                BrowserModule,
                ReactiveFormsModule,
                HttpModule,
                MyRoutes
            ],
            providers: [LocationService, ItemService],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/gedionz/Documents/Courses/Modern Web Application/free-recycling-app/spa-client/src/app/app.module.js.map