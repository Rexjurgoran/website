import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarvinComponent } from './marvin/marvin.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {path: '', component: MarvinComponent, title: "Marvin Henßer"},
  {path: 'profiles', component: ProfilesComponent, title: "Profiles"},
  {path: 'timeline', component: TimelineComponent, title: "Timeline"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
