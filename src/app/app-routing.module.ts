import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarvinComponent } from './marvin/marvin.component';

const routes: Routes = [
  {path: '', redirectTo: 'marvin', title: "Henßler", pathMatch: 'full'},
  {path: 'marvin', component: MarvinComponent, title: "Marvin Henßer"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
