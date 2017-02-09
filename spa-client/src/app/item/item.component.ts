import {Component, OnInit, OnDestroy } from "@angular/core";
import {ItemService} from "../services/item.service";
import {Response} from "@angular/http";
import {Subscription} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";


@Component({
  selector : 'items',
  templateUrl : './item.component.html',
  styleUrls : ['./item.component.css']
})

export class ItemsComponent implements OnInit, OnDestroy {
  selectedCategory = "Wanted";
  itemsList;
  routeSubscription : Subscription;

  constructor(private route : ActivatedRoute, private itemService : ItemService, private router : Router) {
    this.routeSubscription = this.route.params.subscribe(
      params => {
        var url : string;

        var state = params['state'];
        var city = params['city'];

        if(this.router.url.includes('items/search')) {
          var keyword = params['key'];
          if(!keyword) {
            keyword = "";
          }
          url = `http://localhost:3000/api/item/search/?state=${state}&city=${city}&keyword=${keyword}`;
        }else {
          var latitude = params['latitude'];
          var longitude = params['longitude'];

          if(state && city) {
            url = `http://localhost:3000/api/item/${state}/${city}`;
          } else if(longitude && latitude) {
            url = `http://localhost:3000/api/item/coords/${longitude}/${latitude}`;
          }
          else {
            url = `http://localhost:3000/api/item/`;
          }
        }

        this.itemService.getAllItems(url).subscribe(
          (response : Response) => {
            this.itemsList = response.json();
          }
        );
      }

    );
  }

  changeCategory(category : string) {
    if(this.selectedCategory != category) {
      this.selectedCategory = category;
    }
  }

  onItemClick(item) {
    this.itemService.currentItem.emit(item)
    this.router.navigate(['items','details']);
    return false;
  }

  ngOnInit() {
    this.selectedCategory = "Offered";
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}

