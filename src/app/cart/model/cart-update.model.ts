import { CartItem } from '../index';

export class CartUpdate {

    constructor(
        public cartItem: CartItem,
        public newQuantity: number
    ) { }

}
