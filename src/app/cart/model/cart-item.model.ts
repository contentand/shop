import { Product } from '../../product/index';

export class CartItem {

    constructor(
        public productItem: Product,
        public quantity: number
    ) { }

    getItemTotal(): number {
        return this.productItem.price * this.quantity;
    }
}
