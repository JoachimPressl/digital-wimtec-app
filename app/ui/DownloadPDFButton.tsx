'use client'

import Link from "next/link";
import { useEffect, useState } from "react"

export default function DownloadPDFButton({ uid }: { uid: string }) {
    const [exists, setExists] = useState(false);

    useEffect(() => {
        const checkFile = async () => {
            try {
                const res = await fetch(`/produktdaten/${uid}.pdf`, {
                    method: "HEAD",
                });
                setExists(res.ok);
            } catch (err) {
                setExists(false);
            }
        };
        checkFile();
    }, [uid]);

    if (!exists) {
        return <p>Kein PDF-Dokument gefunden</p>;
    } else {
        return <Link href={`/produktdaten/${uid}.pdf`} download>Download PDF</Link>;
    }
    
}