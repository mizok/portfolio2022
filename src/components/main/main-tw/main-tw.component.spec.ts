import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTwComponent } from './main-tw.component';

describe('MainTwComponent', () => {
  let component: MainTwComponent;
  let fixture: ComponentFixture<MainTwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainTwComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MainTwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
