import { Category } from './category.model';

export class Product {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    ingredients: string[];
    equivalents: string[];
}
