import { CartItem } from './cart-item.model';

export class Cart {

    constructor(
        public cartItems?: Array<CartItem>,
        public cartTotal?: number
    ) {
        this.cartItems = cartItems || new Array<CartItem>();
        this.cartTotal = cartTotal || 0;
    }

}
