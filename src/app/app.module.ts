import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatCardModule, MatButtonModule} from '@angular/material';


import { AppComponent } from './app.component';
import { OrderCreateComponent } from './order-create/order-create.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderCreateComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      // MatInputModule,
      // MatCardModule,
      // MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
