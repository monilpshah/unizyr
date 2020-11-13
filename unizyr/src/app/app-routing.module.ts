import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserDisplayComponent } from './user-display/user-display.component';

const routes: Routes = [{path:'adduser',component:UserSignupComponent},
{path:'users',component:UserDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
