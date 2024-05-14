
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: UserListComponent }, 
  { path: 'user-details/:userId', component: UserDetailsComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'header', component: HeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
