import Image from "next/image";
import { fetchFilteredProducts } from "../lib/data";
import Link from "next/link";
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default async function Table({query}: {query: string;}) {
    const products = await fetchFilteredProducts(query);

    if (query.length > 0 && query.length < 4) {
        return <div className="text-sm text-gray-500">Bitte mindestens 4 Zeichen eingeben.</div>;
    }

    return (
        <div>
            {products.map(product => (
                <div key={product.uid} className="flex bg-white border-2 border-gray-200 rounded-2xl my-2 p-5 align-middle">
                    <div className="p-4">
                        <Image src="/globe.svg" alt="Produktbild" width={150} height={150}/>
                    </div>
                    <div className="ms-10 inline-block align-middle">
                        <div className="text-2xl font-bold">
                            {product.uid}
                        </div>
                        <div>
                            {product.name}
                        </div>
                        <div>
                            <Link href={`/${product.uid}`} className="btn-secondary relative"><span>Zum Produkt</span><ArrowLongRightIcon className="absolute -right-6 top-3 h-[18px] w-[18px] -translate-y-1/2"/></Link>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    );
}