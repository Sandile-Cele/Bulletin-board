import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { OrderCreateComponent } from './orders/order-create/order-create.component';
import { OrderPlacedComponent } from './orders/order-placed/order-placed.component';
import { LoginComponent } from '../app/auth/login/login.component';
import { SignupComponent } from '../app/auth/signup/signup.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path: 'list', component: OrderPlacedComponent},
  {path:'create', component: OrderCreateComponent},
  // {path:'edit/:postId', component: OrderCreateComponent},//Edit is comming soon
  {path:'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingsModule { }
