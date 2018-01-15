import { Product } from './product.model';

export class CartItem {

    constructor(
        public productItem: Product,
        public quantity: number
    ) { }

    getItemTotal(): number {
        return this.productItem.price * this.quantity;
    }
}
