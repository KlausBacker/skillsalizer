import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SklevelListComponent} from './sklevel-list/sklevel-list.component';
import {SklevelEditComponent} from './sklevel-edit/sklevel-edit.component';
import {SklevelRoutingModule} from './sklevel-routing.module';

@NgModule({
  declarations: [
    SklevelListComponent,
    SklevelEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SklevelRoutingModule
  ],
  exports: [
    SklevelListComponent,
    SklevelEditComponent
  ]
})
export class SklevelModule {
}
