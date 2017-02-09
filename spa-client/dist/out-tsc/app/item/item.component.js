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
import { ItemService } from "../services/item.service";
import { Router, ActivatedRoute } from "@angular/router";
export var ItemsComponent = (function () {
    function ItemsComponent(route, itemService, router) {
        var _this = this;
        this.route = route;
        this.itemService = itemService;
        this.router = router;
        this.selectedCategory = "Wanted";
        this.routeSubscription = this.route.params.subscribe(function (params) {
            var url;
            var state = params['state'];
            var city = params['city'];
            if (_this.router.url.includes('items/search')) {
                var keyword = params['key'];
                if (!keyword) {
                    keyword = "";
                }
                url = "http://localhost:3000/api/item/search/?state=" + state + "&city=" + city + "&keyword=" + keyword;
            }
            else {
                var latitude = params['latitude'];
                var longitude = params['longitude'];
                if (state && city) {
                    url = "http://localhost:3000/api/item/" + state + "/" + city;
                }
                else if (longitude && latitude) {
                    url = "http://localhost:3000/api/item/coords/" + longitude + "/" + latitude;
                }
                else {
                    url = "http://localhost:3000/api/item/";
                }
            }
            _this.itemService.getAllItems(url).subscribe(function (response) {
                _this.itemsList = response.json();
            });
        });
    }
    ItemsComponent.prototype.changeCategory = function (category) {
        if (this.selectedCategory != category) {
            this.selectedCategory = category;
        }
    };
    ItemsComponent.prototype.onItemClick = function (item) {
        this.itemService.currentItem.emit(item);
        this.router.navigate(['items', 'details']);
        return false;
    };
    ItemsComponent.prototype.ngOnInit = function () {
        this.selectedCategory = "Offered";
    };
    ItemsComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    ItemsComponent = __decorate([
        Component({
            selector: 'items',
            templateUrl: './item.component.html',
            styleUrls: ['./item.component.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, ItemService, Router])
    ], ItemsComponent);
    return ItemsComponent;
}());
//# sourceMappingURL=/Users/gedionz/Documents/Courses/Modern Web Application/free-recycling-app/spa-client/src/app/item/item.component.js.map