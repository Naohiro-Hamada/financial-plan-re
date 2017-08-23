import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FamilyRoutingModule } from './family-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FamilyComponent } from './family.component';
import { FamilyInputComponent } from './family-input/family-input.component';
import { FamilyListComponent } from './family-list/family-list.component';

import { FamilyService } from './family.service';
import { FamilyDetailComponent } from './family-detail/family-detail.component';
import { RelationshipPipe } from './relationship.pipe';
import { FamilyUpdateComponent } from './family-update/family-update.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FamilyRoutingModule,
    SharedModule
  ],
  declarations: [
    FamilyComponent,
    FamilyInputComponent,
    FamilyListComponent,
    FamilyDetailComponent,
    FamilyUpdateComponent,
    RelationshipPipe
  ],
  providers: [
    FamilyService
  ]
})
export class FamilyModule { }
