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
import { LayoutAdminComponent } from './components/Admin/layout-admin/layout-admin/layout-admin.component';
import { CommentComponent } from './components/Admin/comment/comment/comment.component';
import { NewsComponent } from './components/Admin/news/news/news.component';
import { NewsAddComponent } from './components/Admin/news/news-add/news-add.component';
import { NewsUpdateComponent } from './components/Admin/news/news-update/news-update.component';
import { authGuard } from './services/auth.guard';
import { NewDetailComponent } from './components/Client/new-detail/new-detail.component';
import { HighlightAddComponent } from './components/Admin/highlight/highlight-add/highlight-add.component';
import { UpdateHighlightComponent } from './components/Admin/highlight/update-highlight/update-highlight.component';
import { HighlightAdminComponent } from './components/Admin/highlight/highlight-admin/highlight-admin.component';
const routes: Routes = [
  { path: '', children:[
    {path:'', component:PageComponent , children:[
      { path: '', component: HomePageComponent },
      { path: 'highlight', component: HighlightComponent },
      { path: 'tintuc', component: TinTucComponent },
      {path:'new/:id',component:NewDetailComponent}
    ]},
  ]
},

  {path: 'admin',component: LayoutAdminComponent, canActivate:[authGuard], children: [
    {path: '',component: NewsComponent},
    {path: 'user', component: ListUserComponent},
    {path: 'user/add', component: UserAddComponent},
    {path: 'user/edit', component: UserEditComponent},
    {path: 'news/add', component: NewsAddComponent},
    {path: 'news/edit/:id', component:NewsUpdateComponent},
    {path: 'highlight', component:  HighlightAdminComponent},
    {path: 'highlight/add', component: HighlightAddComponent },
    {path: 'highlight/update/:id', component: UpdateHighlightComponent },
 
  ]},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
