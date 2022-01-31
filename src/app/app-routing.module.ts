import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { SurpriseMeComponent } from './pages/surprise-me/surprise-me.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'surprise-me', component: SurpriseMeComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
