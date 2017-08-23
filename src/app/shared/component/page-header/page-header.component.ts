import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fp-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  desc: string;

  constructor() { }

  ngOnInit() {
  }

}
