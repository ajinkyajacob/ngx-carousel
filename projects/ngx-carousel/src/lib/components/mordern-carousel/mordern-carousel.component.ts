import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'ngx-mordern-carousel',
  template: `
    <div class="carousel-container" (touchstart)="onTouchStart($event)" (touchend)="onTouchEnd($event)">
      <div class="carousel-slide" *ngFor="let slide of slides; let i = index" 
           [@slideAnimation]="currentIndex === i ? 'active' : 'inactive'">
        <img [src]="slide.image" [alt]="slide.alt">
      </div>
      <button class="carousel-control prev" (click)="prevSlide()">&#10094;</button>
      <button class="carousel-control next" (click)="nextSlide()">&#10095;</button>
      <div class="carousel-indicators">
        <span *ngFor="let slide of slides; let i = index" 
              [class.active]="currentIndex === i"
              (click)="goToSlide(i)"></span>
      </div>
    </div>
  `,
  styles: [`
    .carousel-container {
      position: relative;
      width: 100%;
      height: 400px;
      overflow: hidden;
    }
    .carousel-slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
    .carousel-slide.active {
      opacity: 1;
    }
    .carousel-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .carousel-control {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      font-size: 18px;
      transition: background 0.3s;
    }
    .carousel-control:hover {
      background: rgba(0, 0, 0, 0.8);
    }
    .carousel-control.prev { left: 10px; }
    .carousel-control.next { right: 10px; }
    .carousel-indicators {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 10px;
    }
    .carousel-indicators span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      transition: background 0.3s;
    }
    .carousel-indicators span.active {
      background: white;
    }
  `],
  animations: [
    trigger('slideAnimation', [
      transition('inactive => active', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition('active => inactive', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MordernCarouselComponent implements OnInit {
  @Input() slides: { image: string; alt: string }[] = [];
  currentIndex = 0;
  touchStartX = 0;

  ngOnInit() {
    // Default slides are commented out as per your modification
    // if (this.slides.length === 0) {
    //   this.slides = [
    //     { image: 'https://picsum.photos/id/1018/1000/600', alt: 'Slide 1' },
    //     { image: 'https://picsum.photos/id/1015/1000/600', alt: 'Slide 2' },
    //     { image: 'https://picsum.photos/id/1019/1000/600', alt: 'Slide 3' },
    //   ];
    // }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    const touchEndX = event.changedTouches[0].clientX;
    const diff = this.touchStartX - touchEndX;
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }
}

