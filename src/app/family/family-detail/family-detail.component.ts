import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fp-family-detail',
  templateUrl: './family-detail.component.html',
  styleUrls: ['./family-detail.component.css']
})
export class FamilyDetailComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  relationship: string;

  @Input()
  birthday: Date;

  @Input()
  rownum: number;

  myVar: boolean;

  constructor() { }

  ngOnInit() {
    this.myVar = false;
  }

  onClick() {
    this.myVar = true;
  }

}
