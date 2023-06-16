import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarvinComponent } from './marvin/marvin.component';
import { ProfilesComponent } from './profiles/profiles.component';

const routes: Routes = [
  {path: '', redirectTo: 'marvin', title: "Henßler", pathMatch: 'full'},
  {path: 'marvin', component: MarvinComponent, title: "Marvin Henßer"},
  {path: 'marvin/profiles', component: ProfilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
