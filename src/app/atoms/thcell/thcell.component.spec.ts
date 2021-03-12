import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThcellComponent } from './thcell.component';

describe('ThcellComponent', () => {
  let component: ThcellComponent;
  let fixture: ComponentFixture<ThcellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThcellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
