import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDriverComponent } from './home-driver/home-driver.component';

const routes: Routes = [
  {path : 'homeDriver', component: HomeDriverComponent},
  { path: '', redirectTo: 'homeDriver', pathMatch: 'full' },
  {path : '**', redirectTo: 'homeDriver', pathMatch: 'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
