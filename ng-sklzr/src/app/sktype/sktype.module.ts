import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SktypeListComponent} from './sktype-list/sktype-list.component';
import {SktypeEditComponent} from './sktype-edit/sktype-edit.component';
import {SktypeRoutingModule} from './sktype-routing.module';

@NgModule({
  declarations: [
    SktypeListComponent,
    SktypeEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SktypeRoutingModule
  ],
  exports: [
    SktypeListComponent,
    SktypeEditComponent
  ]
})
export class SktypeModule {
}
