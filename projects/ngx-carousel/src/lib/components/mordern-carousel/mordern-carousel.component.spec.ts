import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MordernCarouselComponent } from './mordern-carousel.component';

describe('MordernCarouselComponent', () => {
  let component: MordernCarouselComponent;
  let fixture: ComponentFixture<MordernCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MordernCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MordernCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
