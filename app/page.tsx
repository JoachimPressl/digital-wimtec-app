import Link from "next/link";
import { getAllProducts } from "./lib/data";
import Search from "./ui/Search";
import Table from "./ui/Table";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {

  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl">Produkte</h1>
        </div>
        <div className="mt-4 mb-2 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Suche Produkte . . . " />
        </div>
        <Table query={query}/>
        <div className="mt-5 flex w-full justify-center">
          {/* <Pagination totalPages={totalPages} /> */}
        </div>
      </div>
    </>
  );
}
