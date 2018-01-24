import { CartItem } from '../index';

export class Cart {

    constructor(
        public cartItems?: Array<CartItem>,
        public totalQuantity?: number,
        public totalPrice?: number
    ) {
        this.cartItems = cartItems || new Array<CartItem>();
        this.totalQuantity = totalQuantity || 0;
        this.totalPrice = totalPrice || 0;
    }

}
