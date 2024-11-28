import { NgModule } from '@angular/core';
import { NgxCarouselComponent } from './ngx-carousel.component';
import { CommonModule } from '@angular/common';
import { MordernCarouselComponent } from './components/mordern-carousel/mordern-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    NgxCarouselComponent,
    MordernCarouselComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule.withConfig({disableAnimations:false})
  ],
  exports: [
    NgxCarouselComponent,
    MordernCarouselComponent
  ]
})
export class NgxCarouselModule { }
