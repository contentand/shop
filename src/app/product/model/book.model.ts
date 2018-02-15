export class Book {
    constructor(
        public sku: number,
        public name: string,
        public author: string,
        public description: string,
        public keywords: string,
        public stock?: number
    ) {
        this.stock = stock || 0;
    }
}
