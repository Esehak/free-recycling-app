
import {Injectable, EventEmitter} from "@angular/core";
import {Http, Response} from "@angular/http"
import {Observable} from "rxjs";




@Injectable()
export class ItemService {

  currentItem : EventEmitter<Object>;

  constructor(private http : Http){
    this.currentItem = new EventEmitter();
  }

  getAllItems(url : string) : Observable<Response> {
    return this.http.get(url);
  }

}

