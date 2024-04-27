import { promptType } from "../models/core";



interface DisplayResponseChoiceProps {
    type: promptType;
}
export default function DisplayResponseChoice({ type }: DisplayResponseChoiceProps) {
    
    switch (type) {
        case promptType.text: return (<>
            <div>Text</div>
        </>)
        case promptType.image: return (<>
            <div>Image</div>
        </>)
        case promptType.audio: return (<>
            <div>Audio</div>
        </>)
        case promptType.video: return (<>
            <div>Video</div>
        </>)
        default: return (<>
            <div>Text</div>
        </>)
    }
}