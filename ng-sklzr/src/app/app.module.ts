import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from './shared/shared.module';
import {SklevelModule} from './sklevel/sklevel.module';
import { SkillModule } from './skill/skill.module';
import { SktypeModule } from './sktype/sktype.module';
import { ConsultantModule } from './consultant/consultant.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    SklevelModule,
    SkillModule,
    SktypeModule,
    ConsultantModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
