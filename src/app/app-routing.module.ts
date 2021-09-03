import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddempComponent } from './Employee/addemp/addemp.component';
import { DetailempComponent } from './Employee/detailemp/detailemp.component';
import { EmplistComponent } from './Employee/emplist/emplist.component';

const routes: Routes = [
  {path:"",redirectTo:"alllist",pathMatch:"full"},
  {path:"alllist",component:EmplistComponent},
  {path:"addemployee",component:AddempComponent},

  {path:"empdetails/:id",component:DetailempComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
