

interface ResponseItemProps {
    response: string;
    action?: () => void;
}

export default function ResponseItem({ response, action }: ResponseItemProps) {

    const extention = (response: string) => {
        if (response.includes("mp4")) {
            return "video";
        } else if (response.includes("png")) {
            return "image";
        } else {
            return "text";
        }
    }

    return (
        <div onClick={action} className="w-full h-full flex items-center justify-center">
            {extention(response) === "video" 
            ? <video src={response} autoPlay loop className="w-auto h-full object-cover" /> 
            : extention(response) === "image" 
            ? <img src={response} alt="response" className="w-auto h-16 object-cover" />
            : <h1 className="text-xl text-black font-bold text-center">{response}</h1>}
        </div>
    )
}