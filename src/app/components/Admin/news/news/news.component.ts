import { Component } from '@angular/core';
import { ProdutService } from 'src/app/services/produt.service';
import { IProduct } from 'src/app/interface/product';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  products!: IProduct[];
  constructor(private abc:ProdutService){
    this.abc.getProducts().subscribe(data=>{
      this.products=data
      console.log(this.products);
      
    })
  }
  xoasp(id:any){
    this.abc.deleteProduct(id).subscribe(()=> {
      this.products=this.products.filter(item=>item._id !==id)
    })
  }
}
