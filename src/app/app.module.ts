import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RankedComponent } from './ranked/ranked.component';
import { MapsComponent } from './maps/maps.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ServersComponent } from './servers/servers.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes =[
  {path: "ranked", component: RankedComponent},
  {path: "maps", component: MapsComponent},
  {path: "profiles", component: ProfilesComponent},
  {path: "servers", component: ServersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RankedComponent,
    MapsComponent,
    ProfilesComponent,
    ServersComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
