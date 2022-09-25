export interface Order {
    uuid: string,
    name: string,
    mobile: string,
    items: [{
        item: string,
        quantity: number
    }]
}

export const ordersDB : Map<String, Order> = new Map<String, Order>(); 
