import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './component/page-header/page-header.component';

import { RelationshipPipe } from './pipe/relationship/relationship.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageHeaderComponent,
    RelationshipPipe
  ],
  exports: [
    PageHeaderComponent,
    RelationshipPipe
  ]
})
export class SharedModule { }
