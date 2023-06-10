import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProdutService } from 'src/app/services/produt.service';
import { ActivatedRoute} from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor'
@Component({
  selector: 'app-news-update',
  templateUrl: './news-update.component.html',
  styleUrls: ['./news-update.component.css']
})
export class NewsUpdateComponent {
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


  // ============================================
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: [''],
    content:[''],
    description:[''],
    image:[''],
    date:['']

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
          name: product.name,
          content: product.content,
          description: product.description,
          image: product.image,
          date:product.date
        })
      })
    })


  }
  onHandleEdit() {
    const today = new Date();
    if (this.productForm.valid) {
      const product: IProduct = {
        _id: this.product._id,
        name: this.productForm.value.name || "",
        content:this.productForm.value.content ||"",
        description:this.productForm.value.description ||"",
        image:this.productForm.value.image ||"",
        date: this.productForm.value.date ? new Date(this.productForm.value.date).toISOString() : today.toLocaleDateString('en-US')
      }

      this.productService.updateProduct(product).subscribe(data => {
        console.log(data)
      })
    }

  }

  }

