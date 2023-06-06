import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/Client/home-page/home-page.component';

import { ListUserComponent } from './components/Admin/user/list-user/list-user.component';
import { UserAddComponent } from './components/Admin/user/user-add/user-add.component';
import { UserEditComponent } from './components/Admin/user/user-edit/user-edit.component';
import { SignupComponent } from './components/Client/signup/signup.component';
import { SigninComponent } from './components/Client/signin/signin.component';
import { TinTucComponent } from './components/Client/tin-tuc/tin-tuc.component';
import { HighlightComponent } from './components/Client/highlight/highlight.component';
import { PageComponent } from './components/Client/page/page.component';

const routes: Routes = [
  { path: '', children:[
    {path:'', component:PageComponent , children:[
      { path: '', component: HomePageComponent },
      { path: 'highlight', component: HighlightComponent },
      { path: 'tintuc', component: TinTucComponent },
    ]},
  ]

},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'admin', children:[
      // product
      // user
      {path: 'user', component: ListUserComponent},
      {path: 'user/add', component: UserAddComponent},
      {path: 'user/edit', component: UserEditComponent},

    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
