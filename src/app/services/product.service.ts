import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/product';
import { Products } from '../models/products';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private apiURL: string = 'https://dummyjson.com/products';

    constructor(private http: HttpClient) {}

    getAll(): Observable<Products> {
        return this.http.get<Products>(this.apiURL);
    }
}
