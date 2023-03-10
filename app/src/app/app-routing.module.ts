import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';

import { DayDataComponent } from './day-data/day-data.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {path:'',component:MainComponentComponent},
  {path:'about',component:AboutpageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'error',component:ErrorpageComponent},
  {path:':id',component:DayDataComponent},
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

