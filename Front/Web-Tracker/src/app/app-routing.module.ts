import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTrackerComponent } from './home-tracker/home-tracker.component';

const routes: Routes = [
  {path : 'homeTracker', component: HomeTrackerComponent},
  { path: '', redirectTo: 'homeTracker', pathMatch: 'full' },
  {path : '**', redirectTo: 'homeTracker', pathMatch: 'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
