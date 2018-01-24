import { CartItem } from '../';

export class CartUpdate {

    constructor(
        public cartItem: CartItem,
        public newQuantity: number
    ) { }

}
