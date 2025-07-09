import productsData from "@/app/data/products.json";

export type Product = {
    uid: number,
    name: string,
}

const products: Product[] = productsData;

export async function getProduct(uid: number): Promise<Product | undefined>{
    return products.find(product => product.uid === uid);
}

export async function getAllProducts(): Promise<Product[]>{
    return products;
}