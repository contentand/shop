import { Product } from '../../product';

export class CartItem {

    constructor(
        public productItem: Product,
        public quantity: number
    ) { }

    getItemTotal(): number {
        return this.productItem.price * this.quantity;
    }
}
