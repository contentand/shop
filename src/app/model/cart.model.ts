import { Product } from './product.model';

export class Cart {

    constructor(public products?: Array<Product>) {
        this.products = products || new Array<Product>();
    }

}
