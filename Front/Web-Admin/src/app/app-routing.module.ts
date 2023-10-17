import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatePackageComponent } from './create-package/create-package.component';
import { CreateDeliveryComponent } from './create-delivery/create-delivery.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  { path : 'NewPackage', component: CreatePackageComponent},
  { path : 'NewDelivery', component: CreateDeliveryComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'login', component: LoginComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path : '**', redirectTo: 'home', pathMatch: 'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
