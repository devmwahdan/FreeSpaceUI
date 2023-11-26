import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeftSideMenuComponent } from './left-side-menu/left-side-menu.component';
import { RightSideMenuComponent } from './right-side-menu/right-side-menu.component';
import { HeaderComponent } from './header/header.component';
import { FriendsListComponent } from './friend-list/friend-list.component';
import { AppRoutingModule } from './app-routing.module';
import { MangePostComponent } from './mange-post/mange-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { LoginComponent } from './login/login.component';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { AccountInformationComponent } from './settings-menu/account-information/account-information.component';
import { ChangePasswordComponent } from './settings-menu/change-password/change-password.component';
import { ChangeProfileComponent } from './settings-menu/change-profile/change-profile.component';
import { ChangeBasicInfoComponent } from './settings-menu/change-basic-info/change-basic-info.component';
import { NotificationSettingComponent } from './settings-menu/notification-setting/notification-setting.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftSideMenuComponent,
    RightSideMenuComponent,
    HeaderComponent,
    FriendsListComponent,
    MangePostComponent,
    PostListComponent,
    LoginComponent,
    SettingsMenuComponent,
    AccountInformationComponent,
    ChangePasswordComponent,
    ChangeProfileComponent,
    ChangeBasicInfoComponent,
    NotificationSettingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
