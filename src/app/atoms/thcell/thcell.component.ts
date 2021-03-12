import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thcell',
  templateUrl: './thcell.component.html',
  styleUrls: ['./thcell.component.scss']
})
export class ThcellComponent implements OnInit {

  @Input() columnName: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
