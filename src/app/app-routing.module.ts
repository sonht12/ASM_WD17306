import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/Client/home-page/home-page.component';
import { ProductPageComponent } from './components/Client/product-page/product-page.component';
import { ProductDetailComponent } from './components/Client/product-detail/product-detail.component';
import { ProductAdminComponent } from './components/Admin/Product/product-admin/product-admin.component';
import { ProductAddComponent } from './components/Admin/Product/product-add/product-add.component';
import { ProductEditComponent } from './components/Admin/Product/product-edit/product-edit.component';
import { ListCategoryComponent } from './components/Admin/Category/list-category/list-category.component';
import { CategoryAddComponent } from './components/Admin/Category/category-add/category-add.component';
import { CategoryEditComponent } from './components/Admin/Category/category-edit/category-edit.component';
import { ListUserComponent } from './components/Admin/user/list-user/list-user.component';
import { UserAddComponent } from './components/Admin/user/user-add/user-add.component';
import { UserEditComponent } from './components/Admin/user/user-edit/user-edit.component';
import { SignupComponent } from './components/Client/signup/signup.component';
import { SigninComponent } from './components/Client/signin/signin.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product', component: ProductPageComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'admin', children:[
      // product
      {path: 'product', component: ProductAdminComponent},
      {path: 'product/add', component: ProductAddComponent},
      {path: 'product/edit', component: ProductEditComponent},
      // category
      {path: 'category', component: ListCategoryComponent},
      {path: 'category/add', component: CategoryAddComponent},
      {path: 'category/edit', component: CategoryEditComponent},
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
