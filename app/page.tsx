import Link from "next/link";
import { getAllProducts } from "./lib/products";

export default async function Home() {
  const products = await getAllProducts();
  return (
    <>
      {products.map(product => (
        <div key={product.uid} className="bg-white rounded-2xl border-2 border-gray-100 py-4 px-5 mb-2">
          <div><strong>{product.uid} </strong></div>
          <div>{product.name}</div>
          <div className="mt-4"><Link href={`/produkte/${product.uid}`} className="text-white text-center px-3 py-2 bg-indigo-600 rounded transition hover:bg-indigo-400">Detail</Link></div>
        </div>
      ))}
    </>
  );
}
