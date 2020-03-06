import {RouterModule, Routes} from '@angular/router';
import {SklevelListComponent} from './sklevel-list/sklevel-list.component';
import {SklevelEditComponent} from './sklevel-edit/sklevel-edit.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: SklevelListComponent},
  {path: 'sklevels/:id', component: SklevelEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SklevelRoutingModule {

}
