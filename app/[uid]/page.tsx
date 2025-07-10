import Link from "next/link";
import { getProduct } from "@/app/lib/data";

type PageProps = {
    params: { uid: string };
}

export default async function Page({params,}: PageProps){
    const uid = params.uid;
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
        <div>
            <div>
                <h1 className="text-3xl">{product.name}</h1>
            </div>
            <div>
                <h2 className="font-bold">{product.uid}</h2>
            </div>
            <div className="mt-4">
                <Link href={`/produktdaten/db_${product.uid}.pdf`} className="btn-primary" download>Datenblatt</Link>
            </div>
            <div className="mt-4">
                <Link href={`/produktdaten/ma_${product.uid}.pdf`} className="btn-primary" download>Montageanleitung</Link>
            </div>
        </div>
        </>
    );
}