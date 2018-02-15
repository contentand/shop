import { CartItem } from './cart-item.model';


export class Cart {
    constructor(
        public id: number,
        public items: CartItem[],
        public totalPrice: number
    ) {}
}

