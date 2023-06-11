import { Component } from '@angular/core';
import { ProdutService } from 'src/app/services/produt.service';
import { IProduct } from 'src/app/interface/product';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.css']
})
export class NewDetailComponent {
  product!: IProduct;
  constructor(private productService: ProdutService,
    private route: ActivatedRoute,

  ){
  this.route.paramMap.subscribe((param: any) => {
    const id = String(param.get('id'));
    this.productService.getProduct(id).subscribe((product) => 
    {
        this.product = product;
      },
      (error) => console.log(error.message)
    );
  });
}
}
