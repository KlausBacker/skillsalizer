import {RouterModule, Routes} from '@angular/router';
import {ConsultantListComponent} from './consultant-list/consultant-list.component';
import {ConsultantEditComponent} from './consultant-edit/consultant-edit.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: ConsultantListComponent},
  {path: 'consultants/:id', component: ConsultantEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantRoutingModule {

}
