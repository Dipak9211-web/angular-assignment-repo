import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './froms/register-form/register-form.component';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
  {
    component:RegisterFormComponent,
    path:""
  },
  {
    component:UserDataComponent,
    path:"fulldata"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
