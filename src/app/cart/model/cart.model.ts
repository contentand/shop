import { CartItem } from '../index';

export class Cart {

    constructor(
        public cartItems?: Array<CartItem>,
        public totalQuantity?: number,
        public cartTotal?: number
    ) {
        this.cartItems = cartItems || new Array<CartItem>();
        this.totalQuantity = totalQuantity || 0;
        this.cartTotal = cartTotal || 0;
    }

}
