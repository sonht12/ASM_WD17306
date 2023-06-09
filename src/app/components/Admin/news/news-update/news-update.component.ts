import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProdutService } from 'src/app/services/produt.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-news-update',
  templateUrl: './news-update.component.html',
  styleUrls: ['./news-update.component.css']
})
export class NewsUpdateComponent {

  product!: IProduct;
  productForm = this.formBuilder.group({
    name: [''],
    content:[''],
    description:[''],
    image:[''],

  })
  constructor(private productService: ProdutService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.productService.getProduct(id).subscribe(product => {
           // Sản phẩm dựa theo ID
        this.product = product;
        this.productForm.patchValue({
          name:product.name,
          content: product.content,
          description: product.description,
          image: product.image
        })
      })
    })


  }
  onHandleEdit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        _id: this.product._id,
        name: this.productForm.value.name || "",
        content:this.productForm.value.content ||"",
        description:this.productForm.value.description ||"",
        image:this.productForm.value.image ||"",
      }

      this.productService.updateProduct(product).subscribe(data => {
        console.log(data)
      })
    }

  }
}
