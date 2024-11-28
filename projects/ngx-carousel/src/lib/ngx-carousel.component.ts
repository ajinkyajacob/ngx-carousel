import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-carousel',
  template: `
    <div class="ngx-carousel">
      <div class="carousel-inner" [style.transform]="'translateX(-' + (currentIndex * 100) + '%)'">
        <div *ngFor="let item of items" class="carousel-item">
          <img [src]="item.image" [alt]="item.alt" class="carousel-image">
        </div>
      </div>
      <button (click)="prev()" class="carousel-control prev">Previous</button>
      <button (click)="next()" class="carousel-control next">Next</button>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
    .ngx-carousel {
      position: relative;
      overflow: hidden;
    }
    .carousel-inner {
      display: flex;
      transition: transform 0.5s ease;
    }
    .carousel-item {
      flex: 0 0 100%;
      width: 100%;
    }
    .carousel-image {
      width: 100%;
      height: auto;
    }
    .carousel-control {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .prev { left: 10px; }
    .next { right: 10px; }
  `]
})
export class NgxCarouselComponent implements OnInit {
  @Input() items: { image: string, alt: string }[] = [];
  currentIndex = 0;

  ngOnInit() {
    if (this.items.length === 0) console.warn('No items provided for carousel');
  }

  next() { this.currentIndex = (this.currentIndex + 1) % this.items.length; }
  prev() { this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length; }
}