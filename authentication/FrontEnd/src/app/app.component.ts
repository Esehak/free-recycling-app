import { Component } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: Http) {
    this.http.get('http://localhost:3000/login').subscribe(
      (res: Response) => {
        console.log("Here it is")
      }
    );
  }

  login() {
    console.log("great");
    this.http.get('http://localhost:3000/login').subscribe(
      (res: Response) => {
        console.log("Here it is")
      }
    );
  }
  title = 'app works!';
}
