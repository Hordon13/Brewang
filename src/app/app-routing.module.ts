import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrewListComponent } from './components/brew-list/brew-list.component';
import {BrewDetailComponent} from './components/brew-detail/brew-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'breweries', pathMatch: 'full'},
  {path: 'breweries', component: BrewListComponent},
  {path: 'brewery/:id', component: BrewDetailComponent},
  {path: '**', redirectTo: 'breweries', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BrewListComponent, BrewDetailComponent];
