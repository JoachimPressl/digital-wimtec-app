import Link from "next/link";
import { getProduct } from "@/app/lib/products";

type PageProps = {
    params: { uid: string };
}

export default async function Page({params,}: PageProps){
    const uid = parseInt(params.uid, 10);
    const product = await getProduct(uid);

    if (!product) {
        return (
            <>
                <p>Produkt wurde nicht gefunden.</p>
            </>
        );
    }

    return (
        <>
        <h1>{product.name}</h1>
        <h2>{product.uid}</h2>
        <Link href={`/downloads/db_${product.uid}`} download>Datenblatt download</Link>
        </>
    );
}