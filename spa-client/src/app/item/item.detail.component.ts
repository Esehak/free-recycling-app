import {Component, OnInit, OnDestroy } from "@angular/core";
import {ItemService} from "../services/item.service";
import {Response} from "@angular/http";
import {Subscription} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector : 'item-details',
  templateUrl : './item.detail.component.html',
  styleUrls : ['./item.detail.component.css']
})

export class ItemDetailsComponent implements OnInit, OnDestroy {
  itemForDetail;
  itemName = "";
  constructor(private itemService : ItemService) {
    this.itemService.currentItem.subscribe(
      item => {
        console.log(item);
        this.itemName = item.name;
        this.itemForDetail = item;
      },
      error => console.log(error)
    );
  }
  ngOnInit() {

  }

  ngOnDestroy() {
    //this.itemSubscription.unsubscribe();
  }
}
