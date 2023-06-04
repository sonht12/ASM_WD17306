import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
// import { CompareValidatorDirective } from './compare-validator.directive';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAdminComponent } from './components/Admin/Product/product-admin/product-admin.component';
import { ProductAddComponent } from './components/Admin/Product/product-add/product-add.component';
import { ProductEditComponent } from './components/Admin/Product/product-edit/product-edit.component';
import { ListCategoryComponent } from './components/Admin/Category/list-category/list-category.component';
import { CategoryAddComponent } from './components/Admin/Category/category-add/category-add.component';
import { CategoryEditComponent } from './components/Admin/Category/category-edit/category-edit.component';
import { ListUserComponent } from './components/Admin/user/list-user/list-user.component';
import { UserAddComponent } from './components/Admin/user/user-add/user-add.component';
import { UserEditComponent } from './components/Admin/user/user-edit/user-edit.component';
import { HomePageComponent } from './components/Client/home-page/home-page.component';
import { ProductPageComponent } from './components/Client/product-page/product-page.component';
import { ProductDetailComponent } from './components/Client/product-detail/product-detail.component';
import { SignupComponent } from './components/Client/signup/signup.component';
import { SigninComponent } from './components/Client/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAdminComponent,
    ProductAddComponent,
    ProductEditComponent,
    ListCategoryComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    ListUserComponent,
    UserAddComponent,
    UserEditComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductDetailComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
