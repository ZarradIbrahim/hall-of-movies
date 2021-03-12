import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { TableComponent } from '../table/table.component';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let modalService: MatDialog;
  let dialogSpy: jasmine.Spy;
  let dialogRefSpyObj = jasmine.createSpyObj({ afterClosed: of({}), close: null });
  dialogRefSpyObj.componentInstance = { body: '' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatDialogRef],
      declarations: [ModalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('open modal ', () => {
    modalService.open(TestComponent, '300px');
    expect(dialogSpy).toHaveBeenCalled();

    // You can also do things with this like:
    expect(dialogSpy).toHaveBeenCalledWith(TestComponent, { maxWidth: '100vw' });

    // and ...
    expect(dialogRefSpyObj.afterClosed).toHaveBeenCalled();
  });
});
