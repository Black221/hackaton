
import { useEffect, useState } from 'react';
import useMainState from '../../hooks/useMainState';
import Question from '../../components/Question';
import ResponseItem from '../../components/ResponseItem';
import { getGameThemeString } from '../../models/game';

export default function Scene() {

    const { cGame, question, setResponses, responses } = useMainState();
    const gameType:string = getGameThemeString(cGame?.theme);

    useEffect(() => {
        console.log(responses)
    }, [responses]);

    useEffect(() => {
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(cGame && cGame.questions[question].label));
        if (gameType == "braille") {
            window.addEventListener('keydown', (e) => {
                if (responses.length < question ) {
                    setResponses([...responses, e.key]);
                } else {
                    const tab = responses;
                    tab[question] = e.key;
                    setResponses([...tab]);
                }
            });
        }
    }, []);

    const [ selected, setSelected ] = useState<string | null>(null);


    return (<>
        <div className="w-full h-full  rounded-xl p-4 bg-white border">
            <Question question={cGame && cGame.questions[question]} />
            <div className='grid grid-cols-2 gap-2 mt-4 w-full'>
                {gameType == "braille"
                    ? <div></div>
                    : (cGame && cGame.questions[question].choices.map((answer, index) => {
                        return (
                            <div key={index} className={`w-full h-20 bg-white border-2 rounded-xl flex items-center justify-center ${
                                selected === answer ? "bg-blue-300 border-blue-2" : "hover:bg-blue-100"
                            }`}>
                                <ResponseItem response={answer} action={() => {
                                    if (responses.length < question ) {
                                        setResponses([...responses, answer]);
                                    } else {
                                        const tab = responses;
                                        tab[question] = answer;
                                        setResponses([...tab]);
                                    }
                                    setSelected(answer);
                                }} />
                            </div>
                        )
                    }))
                 }
            </div>
        </div>
    </>)
}