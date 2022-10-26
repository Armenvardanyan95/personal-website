import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTalksComponent } from './public-talks.component';

describe('PublicTalksComponent', () => {
  let component: PublicTalksComponent;
  let fixture: ComponentFixture<PublicTalksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicTalksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
