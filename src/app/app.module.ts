import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderCreateComponent,
    OrderPlacedComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      MatSliderModule,
      MatInputModule,
      MatCardModule,
      MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
