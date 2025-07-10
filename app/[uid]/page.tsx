import Link from "next/link";
import { getProduct } from "@/app/lib/data";

export default async function Page(props: { params: Promise<{ uid: string}>}){
    const params = await props.params;
    const uid = params.uid;
    const product = await getProduct(uid);

    if (!product) {
        return <p>Produkt wurde nicht gefunden.</p>;
    }

    return (
        <div>
            <div>
                <h1 className="text-3xl">{product.name}</h1>
            </div>
            <div>
                <h2 className="font-bold">{product.uid}</h2>
            </div>
            <div className="mt-4">
                <Link href={`/produktdaten/WimTec_${product.uid}_DB.pdf`} className="btn-primary" download>Datenblatt</Link>
            </div>
            <div className="mt-4">
                <Link href={`/produktdaten/WimTec_${product.uid}_MA.pdf`} className="btn-primary" download>Montageanleitung</Link>
            </div>
        </div>
    );
}