import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter/counter.component';
import { ProductComponent } from './product/product.component';
import { counterReducer } from './counter.reducer';
import { addProductReducer } from './product.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer ,product: addProductReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
