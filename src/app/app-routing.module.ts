import { LogComponent } from './login/log/log.component';
import { FinanceModule } from './finance/finance.module';
import { HrModule } from './hr/hr.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';


const routes: Routes = [
{
  path:'',
  redirectTo:'login',
  pathMatch:'full'
},
{
  path:'login',
  component:LogComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),LoginModule,FinanceModule,HrModule],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor()
  {
    console.log("this is app")
  }
}
