import { Book } from '../../product';

export class CartItem {
    constructor(
        public book: Book,
        public quantity: number
    ) {}
}
