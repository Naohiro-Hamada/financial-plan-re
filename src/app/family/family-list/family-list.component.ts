import { Component, OnInit } from '@angular/core';

import { FamilyService } from '../family.service';

import { Human } from '../human';

@Component({
  selector: 'fp-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit {

    family: Human[];

    constructor(private familyService: FamilyService) { }

    ngOnInit() {
      this.family = this.familyService.list;
    }

  }

