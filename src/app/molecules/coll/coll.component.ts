import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coll',
  templateUrl: './coll.component.html',
  styleUrls: ['./coll.component.scss']
})
export class CollComponent implements OnInit {

  @Input() columnName: string;
  @Input() data: string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
