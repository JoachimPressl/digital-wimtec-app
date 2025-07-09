type Product = {
    uid: number;
    name: string,
}

(global as any).product = {
    uid: 12345678,
    name: "Test",
} as Product;

export async function getProduct(uid: number){
    return global.product as Product;
}