import { Product } from '../../product';

export class CartItem {

    constructor(
        public productItem: Product,
        public quantity: number
    ) { }

}
