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
export var ItemDetailsComponent = (function () {
    function ItemDetailsComponent(itemService) {
        var _this = this;
        this.itemService = itemService;
        this.itemName = "";
        this.itemService.currentItem.subscribe(function (item) {
            console.log(item);
            _this.itemName = item.name;
            _this.itemForDetail = item;
        }, function (error) { return console.log(error); });
    }
    ItemDetailsComponent.prototype.ngOnInit = function () {
    };
    ItemDetailsComponent.prototype.ngOnDestroy = function () {
        //this.itemSubscription.unsubscribe();
    };
    ItemDetailsComponent = __decorate([
        Component({
            selector: 'item-details',
            templateUrl: './item.detail.component.html',
            styleUrls: ['./item.detail.component.css']
        }), 
        __metadata('design:paramtypes', [ItemService])
    ], ItemDetailsComponent);
    return ItemDetailsComponent;
}());
//# sourceMappingURL=/Users/gedionz/Documents/Courses/Modern Web Application/free-recycling-app/spa-client/src/app/item/item.detail.component.js.map