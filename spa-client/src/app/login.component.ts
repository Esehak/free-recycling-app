import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'login',
  template: `<button (click) = "loginPlease()">Log in</button>`
})
export class LoginComponent implements OnInit{

  ngOnInit() {

  }

}
