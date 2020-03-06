import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ConsultantListComponent} from './consultant-list/consultant-list.component';
import {ConsultantEditComponent} from './consultant-edit/consultant-edit.component';
import {ConsultantRoutingModule} from './consultant-routing.module';

@NgModule({
  declarations: [
    ConsultantListComponent,
    ConsultantEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ConsultantRoutingModule
  ],
  exports: [
    ConsultantListComponent,
    ConsultantEditComponent
  ]
})
export class ConsultantModule {
}
