import Link from "next/link";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>){
    return (
        <>
        {children}
        <div className="mt-10">
            <Link href="/" className="btn-secondary"><span aria-hidden="true">&larr; </span>Zurück zur Übersicht</Link>
        </div>
        </>
    );
}