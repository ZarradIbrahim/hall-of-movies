import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdcellComponent } from './tdcell.component';

describe('TdcellComponent', () => {
  let component: TdcellComponent;
  let fixture: ComponentFixture<TdcellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdcellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
