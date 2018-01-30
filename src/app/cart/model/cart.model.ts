import { CartItem } from '../';

export class Cart {

    constructor(
        public cartItems?: Array<CartItem>,
        public totalQuantity?: number,
        public totalPrice?: number,
        public lastUpdated?: Date
    ) {
        this.cartItems = cartItems || new Array<CartItem>();
        this.totalQuantity = totalQuantity || 0;
        this.totalPrice = totalPrice || 0;
        this.lastUpdated = lastUpdated || new Date();
    }

}
