import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './main/table/table.component';
import { RegisterComponent } from './main/register/register.component';

const routes: Routes = [
  {
    path:'main',
    component:TableComponent
  },
  {
    path:'Add employee',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
