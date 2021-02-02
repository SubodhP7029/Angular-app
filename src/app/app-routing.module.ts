import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "restaurant",
    component: RestaurantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
