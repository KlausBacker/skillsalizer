import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SkillListComponent} from './skill-list/skill-list.component';
import {SkillEditComponent} from './skill-edit/skill-edit.component';
import {SkillRoutingModule} from './skill-routing.module';

@NgModule({
  declarations: [
    SkillListComponent,
    SkillEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SkillRoutingModule
  ],
  exports: [
    SkillListComponent,
    SkillEditComponent
  ]
})
export class SkillModule {
}
