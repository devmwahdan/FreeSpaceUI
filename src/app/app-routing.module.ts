import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsListComponent } from './friend-list/friend-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent,
children: [
  { path: 'friends', component: FriendsListComponent},
          ]
  }



  
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {enableTracing: true}  // <-- debugging purposes only
    )],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
