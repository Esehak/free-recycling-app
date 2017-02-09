import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MyRoutes} from "./app.routes";
import {HomeComponent} from "./homepage/home.component";
import {LocationService} from "./services/location.service";
import {ItemService} from "./services/item.service";
import {CitiesComponent} from "./city/city.component";
import { ItemsComponent } from "./item/item.component";
import { ItemDetailsComponent } from "./item/item.detail.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { LoginComponent } from "./login.component";
import {AdvancedSearchComponent} from "./search/item.search.component";

@NgModule({
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
})
export class AppModule { }
