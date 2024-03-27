import { Component, Input } from '@angular/core';
import { Iproduct } from 'src/app/models/product';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
    @Input() product: Iproduct;
    isLessOpaque: boolean = false;

    toggleOpacity() {
        this.isLessOpaque = !this.isLessOpaque;
    }
}
