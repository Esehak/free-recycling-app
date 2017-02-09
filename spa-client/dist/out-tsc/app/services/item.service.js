var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, EventEmitter } from "@angular/core";
import { Http } from "@angular/http";
export var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
        this.currentItem = new EventEmitter();
    }
    ItemService.prototype.getAllItems = function (url) {
        return this.http.get(url);
    };
    ItemService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], ItemService);
    return ItemService;
}());
//# sourceMappingURL=/Users/gedionz/Documents/Courses/Modern Web Application/free-recycling-app/spa-client/src/app/services/item.service.js.map