import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleMapComponent } from './marble-map.component';

describe('MarbleMapComponent', () => {
  let component: MarbleMapComponent;
  let fixture: ComponentFixture<MarbleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarbleMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarbleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
