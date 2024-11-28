import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-carousel-app';
cacarouselItems = [
  { 
    image: 'https://picsum.photos/800/400?random=1', 
    alt: 'Random Landscape 1' 
  },
  { 
    image: 'https://picsum.photos/800/400?random=2', 
    alt: 'Random Landscape 2' 
  },
  { 
    image: 'https://picsum.photos/800/400?random=3', 
    alt: 'Random Landscape 3' 
  },
  { 
    image: 'https://picsum.photos/800/400?random=4', 
    alt: 'Random Landscape 4' 
  },
  { 
    image: 'https://picsum.photos/800/400?random=5',  
    alt: 'Random Landscape 5' 
  }
];  
}
