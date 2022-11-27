import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgClockComponent } from './svg-clock.component';

describe('SvgClockComponent', () => {
  let component: SvgClockComponent;
  let fixture: ComponentFixture<SvgClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgClockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
