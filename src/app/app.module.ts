import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlockComponent } from "./block/block.component";

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent
  ],
  imports: [
    BrowserModule,
    AppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
