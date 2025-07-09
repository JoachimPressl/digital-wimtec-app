import Link from "next/link";
import { getProduct } from "@/app/data/product";

export default async function Page({params,}:{params: {uid: number}}){

    const product = await getProduct(params.uid);


    return (
        <>
        <Link href={`/downloads/${product.uid}.pdf`}>{product.name}</Link>
        </>
    );
}