import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import {FormBuilder,FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProdutService } from 'src/app/services/produt.service';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent {

  constructor(private formBuilder : FormBuilder,
    private productService:ProdutService
    ){
  }
  productForm = this.formBuilder.group({
  name:[''],
  content:[''],
  description:[''],
  image:[''],
  })
  onHandSubmit(){
    if(this.productForm.valid){
      const product: IProduct={
        name:this.productForm.value.name || "",
        content:this.productForm.value.content ||"",
        description:this.productForm.value.description ||"",
        image:this.productForm.value.image ||"",
      }
      this.productService.addProduct(product).subscribe(data =>{
        console.log(data);

      })
    }
  }

}
