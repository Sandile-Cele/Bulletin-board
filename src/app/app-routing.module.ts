import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { OrderCreateComponent} from './orders/order-create/order-create.component';
import { OrderPlacedComponent } from './orders/order-placed/order-placed.component';

const routes: Routes = [
  {path: '', component: OrderPlacedComponent},
  {path:'create', component: OrderCreateComponent}
  // {path:'create', component: OrderCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingsModule { }
