import { Question as Type } from "../models/core"
import Audio from "./Audio";


import thinks from "../assets/thinks.jpg";

interface QuestionProps {
    question: Type
}

export default function Question({ question }: QuestionProps) {

    const audio: string | undefined = question.audio ? question.audio : "";

    const type = question.image ? "image" : question.video ? "video" : question.audio ? "audio" : "text";

    const getQuestion = () => {
        switch (type) {
            case "image":
                return <img src={question.image} alt="question" className="w-auto h-full object-cover" />
            case "video":
                return <video src={question.video} muted autoPlay loop className="w-auto h-full object-cover" />
            case "text":
                return <h1 className="text-[90px] text-black font-bold text-center">{question.text}</h1>
            case "audio":
                return <Audio src={audio} />
            default:
                return <p className="text-xl text-black font-bold">{question.label}</p>
        }
    }

    return(<>
        <div>
            <h1 className="text-2xl text-black font-bold flex">
                <div>{question.label}</div>
                <div>
                    <img src={thinks} alt="thinks" className="w-44 h-auto" />
                </div>
            </h1>
            <div className="h-48 mt-4 overflow-hidden rounded-xl flex items-center justify-center ">
                {getQuestion()}
            </div>
        </div>
    </>)
}