import { typeOfHandicape } from "./user";



export enum promptType {
    text = "text",
    image = "image",
    audio = "audio",
    video = "video"
}


export function getPromptType(handicape: typeOfHandicape): promptType [] {
    switch (handicape) {
        case typeOfHandicape.visual: return [promptType.audio];
        case typeOfHandicape.auditory: return [promptType.image, promptType.text];
        case typeOfHandicape.speech: return [promptType.image, promptType.text, promptType.audio, promptType.video];
        default: return [promptType.text, promptType.image, promptType.audio, promptType.video];
    }
}


export interface Question {
    label: string;
    image?: string;
    audio?: string;
    video?: string;
    text?: string;
    response: string;
    choices: string[];
    choicesImages?: string[];
    choicesAudios?: string[];
}