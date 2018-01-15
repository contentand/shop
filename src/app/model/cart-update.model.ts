import { CartItem } from './cart-item.model';

export class CartUpdate {

    constructor(
        public cartItem: CartItem,
        public newQuantity: number
    ) { }

}
