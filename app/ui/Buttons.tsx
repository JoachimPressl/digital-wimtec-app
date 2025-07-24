'use client'

import Link from "next/link";
import { useEffect, useState } from "react"


export function DownloadPDFButton({ uid }: { uid: string }) {
    const [exists, setExists] = useState(false);

    useEffect(() => {
        const checkFile = async () => {
            try {
                const res = await fetch(`/produktdaten/MA_${uid}_WimTec.pdf`, {
                    method: "HEAD",
                });
                setExists(res.ok);
            } catch (error) {
                console.log(error);
                setExists(false);
            }
        };
        checkFile();
    }, [uid]);

    if (!exists) {
        return <div className="btn"><p>Kein PDF-Dokument gefunden</p></div>;
    } else {
        return <Link href={`/produktdaten/MA_${uid}_WimTec.pdf`} className="btn btn-primary" download>Download PDF</Link>;
    }
}


export function DownloadSVGButton({ uid }: { uid: string }) {
    const [exists, setExists] = useState(false);

    useEffect(() => {
        const checkFile = async () => {
            try {
                const res = await fetch(`/produktdaten/${uid}.svg`, {
                    method: "HEAD",
                });
                setExists(res.ok);
            } catch (error) {
                console.log(error);
                setExists(false);
            }
        };
        checkFile();
    }, [uid]);

    if (!exists) {
        return <div className="btn"><p>Kein SVG-Dokument gefunden</p></div>;
    } else {
        return <Link href={`/produktdaten/${uid}.svg`} className="btn btn-primary" download>Download SVG</Link>;
    } 
}