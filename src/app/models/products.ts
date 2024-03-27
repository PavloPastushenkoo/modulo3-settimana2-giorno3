import { Iproduct } from './product';

export interface Products {
    products: Iproduct[],
    total: number,
    skip: number,
    limit: number
}
