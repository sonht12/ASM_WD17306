import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListUserComponent } from './components/Admin/user/list-user/list-user.component';
import { UserAddComponent } from './components/Admin/user/user-add/user-add.component';
import { UserEditComponent } from './components/Admin/user/user-edit/user-edit.component';
import { HomePageComponent } from './components/Client/home-page/home-page.component';
import { SignupComponent } from './components/Client/signup/signup.component';
import { SigninComponent } from './components/Client/signin/signin.component';
import { TinTucComponent } from './components/Client/tin-tuc/tin-tuc.component';
import { HighlightComponent } from './components/Client/highlight/highlight.component';
import { PageComponent } from './components/Client/page/page.component';
import { LayoutAdminComponent } from './components/Admin/layout-admin/layout-admin/layout-admin.component';
import { NewsComponent } from './components/Admin/news/news/news.component';
import { CommentComponent } from './components/Admin/comment/comment/comment.component';
import { NewsAddComponent } from './components/Admin/news/news-add/news-add.component';
import { NewsUpdateComponent } from './components/Admin/news/news-update/news-update.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NewDetailComponent } from './components/Client/new-detail/new-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { HighlightAddComponent } from './components/Admin/highlight/highlight-add/highlight-add.component';
import { UpdateHighlightComponent } from './components/Admin/highlight/update-highlight/update-highlight.component';
import { HighlightAdminComponent } from './components/Admin/highlight/highlight-admin/highlight-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    UserAddComponent,
    UserEditComponent,
    HomePageComponent,
    SignupComponent,
    SigninComponent,
    TinTucComponent,
    HighlightComponent,
    PageComponent,
    LayoutAdminComponent,
    NewsComponent,
    CommentComponent,
    NewsAddComponent,
    NewsUpdateComponent,
    NewDetailComponent,
    HighlightAddComponent,
    UpdateHighlightComponent,
    HighlightAdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularEditorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
