import DownloadPDFButton from "../ui/DownloadPDFButton";

export default async function Page(props: { params: Promise<{ uid: string}>}){
    const params = await props.params;
    const uid = params.uid;

    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl">{uid}</h1>
            </div>
            <div className="mt-4 text-center">
                <DownloadPDFButton uid={uid}/>
            </div>
        </div>
    );
}