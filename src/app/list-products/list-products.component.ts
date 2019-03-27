import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-list-products',
    templateUrl: 'list-products.component.html',
    styleUrls: ['list-products.component.css']
})
export class ListProductsComponent{
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