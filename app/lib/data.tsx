import productsData from "@/app/lib/products.json";
import { Product } from "@/app/lib/definitions";

const products: Product[] = productsData;

export async function getProduct(uid: string): Promise<Product | undefined>{
    return products.find(product => product.uid === uid);
}

export async function getAllProducts(): Promise<Product[]>{
    return products;
}

export async function fetchFilteredProducts(query: string): Promise<Product[]> {

    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.length < 4) {
        return [];
    }

    const filtered = products.filter((product) => 
        product.name.toLowerCase().includes(lowerQuery) ||
        product.uid.toLowerCase().includes(lowerQuery)
    );

    return filtered;
} 