import { Component, OnInit } from '@angular/core';
import { Iproduct } from './models/product';
import { ProductsService } from './services/product.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'angular1';
    products: Iproduct[] = [];
    loading = false;

    constructor(private productsService: ProductsService) {}

    ngOnInit(): void {
        this.loading = true;
        this.productsService.getAll().subscribe((products) => {
            console.log(products);
            this.products = products.products;
            this.loading = false;
        });
    }
}

export default AppComponent; 
