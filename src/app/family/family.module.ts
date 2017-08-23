import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FamilyRoutingModule } from './family-routing.module';
import { FamilyComponent } from './family.component';
import { FamilyInputComponent } from './family-input/family-input.component';
import { FamilyListComponent } from './family-list/family-list.component';

import { FamilyService } from './family.service';
import { FamilyDetailComponent } from './family-detail/family-detail.component';
import { RelationshipPipe } from './relationship.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FamilyRoutingModule
  ],
  declarations: [
    FamilyComponent,
    FamilyInputComponent,
    FamilyListComponent,
    FamilyDetailComponent,
    RelationshipPipe
  ],
  providers: [
    FamilyService
  ]
})
export class FamilyModule { }
