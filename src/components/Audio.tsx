import { useEffect, useRef } from "react";
import audio from "../assets/audio.svg";

interface AudioProps {
    src: string;
    autoplay?: boolean;
    loop?: boolean;
    start?: boolean;
}

export default function Audio({ src, autoplay, loop, start }: AudioProps) {

    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            if (start) {
                audioRef.current.play();
            }
        }
    }, [start])

    const play = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }

    useEffect(() => {
        play();
    }, [])

    return (<>
        <audio ref={audioRef} src={src} autoPlay={autoplay} loop={loop} />
        <button onClick={play} className=" top-0 right-0 m-2 border-2 p-4 rounded-md">
            <img src={audio} alt="audio" className="w-16 h-16" />
        </button>
    </>)
}

