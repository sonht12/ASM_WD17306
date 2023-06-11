import { LayoutAdminComponent } from './../../layout-admin/layout-admin/layout-admin.component';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import {FormBuilder,FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProdutService } from 'src/app/services/produt.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Router } from '@angular/router';
@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent {


 editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],

};



  constructor(
    private formBuilder : FormBuilder,
    private productService:ProdutService,
    private router: Router
    ){
  }
  productForm = this.formBuilder.group({
  name:[''],
  content:[''],
  description:[''],
  image:[''],
  date:['']
  })
  onHandSubmit(){


    if(this.productForm.valid){
      const today = new Date();
      const product: IProduct={
        name:this.productForm.value.name || "",
        content:this.productForm.value.content ||"",
        description:this.productForm.value.description ||"",
        image:this.productForm.value.image ||"",
        date: this.productForm.value.date ? new Date(this.productForm.value.date).toLocaleDateString('en-US') : today.toLocaleDateString('en-US')
      }
      this.productService.addProduct(product).subscribe(data =>{
        console.log(data);
        this.router.navigate(['/admin']);

      })
    }
  }



}
