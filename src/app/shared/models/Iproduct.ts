import { Categories } from "../enums/categories";

export interface IProduct {
    id: number,
    category: Categories,
    articlenr: string,
    dateadded: string,
    stock: number,
    showcase: boolean,
    manufacturer: string,
    name: string,
    function: string,
    hp: string,
    price: number,
    image: string,
    description: string
}
