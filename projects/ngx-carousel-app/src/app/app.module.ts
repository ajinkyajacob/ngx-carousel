import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxCarouselModule } from "../../../ngx-carousel/src/lib/ngx-carousel.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCarouselModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
