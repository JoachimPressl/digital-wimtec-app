'use client'

import Link from "next/link";
import { useEffect, useState } from "react"

export default function DownloadPDFButton({ uid }: { uid: string }) {
    const [exists, setExists] = useState(false);

    useEffect(() => {
        const checkFile = async () => {
            try {
                const res = await fetch(`/produktdaten/${uid}.svg`, {
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
        return <p>Kein SVG-Dokument gefunden</p>;
    } else {
        return <Link href={`/produktdaten/${uid}.svg`} download>Download SVG</Link>;
    }
    
}