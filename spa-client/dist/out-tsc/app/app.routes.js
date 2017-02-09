import { HomeComponent } from "./homepage/home.component";
import { RouterModule } from "@angular/router";
import { CitiesComponent } from "./city/city.component";
import { ItemsComponent } from "./item/item.component";
import { LoginComponent } from './login.component';
import { AdvancedSearchComponent } from "./search/item.search.component";
import { ItemDetailsComponent } from "./item/item.detail.component";
var MY_ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'error/404', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cities/:state', component: CitiesComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'items/details', component: ItemDetailsComponent },
    { path: 'items/advancedsearch', component: AdvancedSearchComponent },
    { path: 'items/:coords', component: ItemsComponent },
    { path: 'items/:state/:city', component: ItemsComponent },
    { path: 'items/search/:state/:city/:key', component: ItemsComponent },
    { path: '**', redirectTo: '/error/404' }
];
export var MyRoutes = RouterModule.forRoot(MY_ROUTES);
//# sourceMappingURL=/Users/gedionz/Documents/Courses/Modern Web Application/free-recycling-app/spa-client/src/app/app.routes.js.map