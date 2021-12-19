export interface User {
    address: string;
    age: string;
    email: string;
    name: string;
    userPassword: string;
}

export interface Product {
    id?: number;
    name: string;
    price : number;
    amount : number;
    factory: {
        id: number;
        name: string;
    }
}