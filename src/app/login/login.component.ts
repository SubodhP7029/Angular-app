import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user :any;
  pass:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    if (this.user == "something" && this.pass == "123456") {
      console.log("Welcome to Zomato");
      this.router.navigate(["restaurant"])

    } else {
      alert("User Unauthorized");
      console.log("Failed");
    }
  }
}
