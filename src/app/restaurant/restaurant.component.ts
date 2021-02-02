import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  list : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRestaurant();
  }

  getRestaurant(){
    let url = "https://developers.zomato.com/api/v2.1/collections?city_id=1";
    let headers =  new HttpHeaders({
      "Content-Type":"application/json",
      "user-key":"c5db13e32065061295f14087f6ac2991",
      // "entity_id":"5",
      // "entity_type":"city"
    });

    let resp = this.http.get(url,{
      headers:headers
    })

    resp.subscribe((data:any)=>this.list=data);
  }

}
