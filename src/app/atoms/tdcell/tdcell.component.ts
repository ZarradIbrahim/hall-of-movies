import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdcell',
  templateUrl: './tdcell.component.html',
  styleUrls: ['./tdcell.component.scss']
})
export class TdcellComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
