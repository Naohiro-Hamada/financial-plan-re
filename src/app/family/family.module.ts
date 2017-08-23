import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyRoutingModule } from './family-routing.module';
import { FamilyComponent } from './family.component';
import { FamilyInputComponent } from './family-input/family-input.component';
import { FamilyListComponent } from './family-list/family-list.component';

@NgModule({
  imports: [
    CommonModule,
    FamilyRoutingModule
  ],
  declarations: [FamilyComponent, FamilyInputComponent, FamilyListComponent]
})
export class FamilyModule { }
