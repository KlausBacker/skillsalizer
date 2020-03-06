import {RouterModule, Routes} from '@angular/router';
import {SkillListComponent} from './skill-list/skill-list.component';
import {SkillEditComponent} from './skill-edit/skill-edit.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: SkillListComponent},
  {path: 'skills/:id', component: SkillEditComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillRoutingModule {

}
