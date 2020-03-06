import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'consultants', loadChildren: './consultant/consultant.module#ConsultantModule'},
  {path: 'skills', loadChildren: './skill/skill.module#SkillModule'},
  {path: 'sklevels', loadChildren: './sklevel/sklevel.module#SklevelModule'},
  {path: 'sktypes', loadChildren: './sktype/sktype.module#SktypeModule'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
