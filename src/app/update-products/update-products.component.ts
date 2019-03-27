import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {
  products: [];
  constructor(private http: Http){
  }
  getProducts(){
      this.http.get('http://localhost:4000/api/products')
      .subscribe(response=>{
          this.products = response.json();
          console.log(this.products);
      },
       err=>console.log(err)
       );
  }
  ngOnInit(): void {
      this.getProducts();
      
  }

}
