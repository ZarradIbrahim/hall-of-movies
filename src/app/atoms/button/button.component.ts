import { OnChanges } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges {

  @Input() textInput: string;
  @Input() iconInput: string;

  iconName: string;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    switch (this.iconInput) {
      case 'edit':
        this.iconName = 'xxxx';
        break;
      case 'search':
        this.iconName = 'xxxx';
        break;
      default:
        this.iconName= null;
    }
    
  }

}
