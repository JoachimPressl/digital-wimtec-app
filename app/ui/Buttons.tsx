'use client'

import Image from "next/image";
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
        return null;
    } else {
        return <DownloadButton file={`/produktdaten/MA_${uid}_WimTec.pdf`} />;
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
        return null;
    } else {
        return <DownloadButton file={`/produktdaten/${uid}.svg`} />;
    } 
}

export function DownloadButton({file}: {file: string}){
    return (
        <Link href={file} className="btn btn-primary inline-flex">
            Download
            <Image src="https://www.wimtec.com/typo3conf/ext/theme/Resources/Public/Icons/pfeil-lang-white.svg" width={"65"} height={20} alt="Arrow" className="ms-2" />
        </Link>
    );
}