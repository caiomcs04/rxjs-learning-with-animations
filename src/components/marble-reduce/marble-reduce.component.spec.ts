import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleReduceComponent } from './marble-reduce.component';

describe('MarbleReduceComponent', () => {
  let component: MarbleReduceComponent;
  let fixture: ComponentFixture<MarbleReduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarbleReduceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarbleReduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
