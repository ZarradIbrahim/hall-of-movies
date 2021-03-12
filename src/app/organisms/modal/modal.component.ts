import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from '../../models/movie.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  form: FormGroup;
  allGenres = new Set();

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private dataService: DataService
  ) { }



  ngOnInit() {
    console.log(this.data.genres);
    this.allGenres = this.dataService.allGenres;
    this.form = this.formBuilder.group({
      titleType: ['',Validators.required],
      primaryTitle: ['',Validators.required],
      originalTitle: ['',Validators.required],
      startYear: ['',Validators.required],
      endYear: ['',Validators.required],
      runTimeMinutes: ['',Validators.required],
      isAdult: ['',Validators.required],
      genres: ['',Validators.required]
    });
    this.form.patchValue(this.data);

  }

  onSubmit() {
    console.log("FORM VALUE ",this.form.value);
      //if(this.form.valid)  this.dialogRef.close();

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
