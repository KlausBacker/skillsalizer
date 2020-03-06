import {RouterModule, Routes} from '@angular/router';
import {SktypeListComponent} from './sktype-list/sktype-list.component';
import {SktypeEditComponent} from './sktype-edit/sktype-edit.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: SktypeListComponent},
  {path: 'sktypes/:id', component: SktypeEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SktypeRoutingModule {

}
