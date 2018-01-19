import { Category } from './category.model';

export class Product {

    constructor(
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
        public isAvailable?: boolean,
        public ingredients?: Array<string>,
        public equivalents?: Array<string>,
    ) {
        this.isAvailable = isAvailable || false;
        this.ingredients = ingredients || new Array<string>();
        this.equivalents = equivalents || new Array<string>();
    }

}
