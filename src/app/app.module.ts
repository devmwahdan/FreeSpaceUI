import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeftSideMenuComponent } from './left-side-menu/left-side-menu.component';
import { RightSideMenuComponent } from './right-side-menu/right-side-menu.component';
import { HeaderComponent } from './header/header.component';
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
import { FriendsListComponent } from './friend-list/friend-list.component';
import { LeftSideFriendList } from './friend-list/left-side-bar/left-side-bar.component';
import { ProfilePage } from './profile/profile-page.component';
import { ProfileInfo } from './profile/profileInfo/profileInfo.component';
import { ProfileDetails } from './profile/profile-details/profile-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LeftSideMenuComponent,
    RightSideMenuComponent,
    HeaderComponent,
    FriendsListComponent,
    MangePostComponent,
    PostListComponent,
    LeftSideMenuComponent,
    SettingsMenuComponent,
    AccountInformationComponent,
    ChangeBasicInfoComponent,
    ChangeBasicInfoComponent,
    NotificationSettingComponent,
    LeftSideFriendList,
    ProfilePage,
ProfileInfo,
ProfileDetails,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
