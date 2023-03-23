import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleFilterComponent } from './marble-filter.component';

describe('MarbleFilterComponent', () => {
  let component: MarbleFilterComponent;
  let fixture: ComponentFixture<MarbleFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarbleFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarbleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
