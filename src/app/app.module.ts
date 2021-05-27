import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { OrderCreateComponent } from './orders/order-create/order-create.component';
import { OrderPlacedComponent } from './orders/order-placed/order-placed.component';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingsModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    OrderCreateComponent,
    OrderPlacedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true},
// {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true}
// ]
