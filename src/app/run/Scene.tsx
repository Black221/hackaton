import { useCallback, useEffect, useState } from "react";
import Stickman from "../../components/Stickman";
import WordDraw from "../../components/WordDraw";
import useMainState from "../../hooks/useMainState";
import Keyboard from "../../components/Keyboard";
import ModalElement from "../../components/ModalElement";
import DisplayAnswer from "../../components/DisplayAnswer";
import Button from "../../components/Button";

import gameOver from "../../assets/audios/game-over.mp3";
import gameWin from "../../assets/audios/game-win2.mp3";
import { useNavigate } from "react-router-dom";


export default function Scene() {

    // eslint-disable-next-line


    const { cGame, question, setResponses, responses } = useMainState();


    const [guessLetters, setGuessLetters] = useState<string[]>([]);

    // take and filter the letters we guess
    const incorrectLetters = guessLetters.filter(
        letter => !cGame.questions[question].response.includes(letter)
    )

    const isLoser = incorrectLetters.length >= 6;
    const isWinner = cGame.questions[question].response
        .split('')
        .every(letter => guessLetters.includes(letter));

    const addGuessLetter = useCallback((letter: string) => {
        if (guessLetters.includes(letter) || isLoser || isWinner) {
        return
        } else {
            setGuessLetters(currentLetters => [...currentLetters, letter])
        }
    }, [guessLetters, isLoser, isWinner])

    // keyboard event handler
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
        const key = e.key

        if (!key.match(/^[a-z]$/)) {
            return
        } else {
            e.preventDefault();
            addGuessLetter(key);
        }
        }

        document.addEventListener('keypress', handler)

        return () => {
            document.removeEventListener("keypress", handler)
        }
        // eslint-disable-next-line 
    }, [guessLetters]);

    useEffect(() => {
        if (isWinner) {
            setModalElement(<ModalElement 
                title="Bravo !"
                content={<DisplayAnswer isCorrect={true} />}
                buttons={[]}
            />)
            setModalOpen(true);
            const answer = guessLetters.join('');
            if (responses.length < question ) {
                setResponses([...responses, answer]);
            } else {
                const tab = responses;
                tab[question] = answer;
                setResponses([...tab]);
            }
        }
        // eslint-disable-next-line
    }, [isWinner]);


    useEffect(() => {
        if (isLoser) {
            setModalElement(<ModalElement 
                title="Perdu !"
                content={<DisplayAnswer isCorrect={false} />}
                buttons={[]}
            />)
            setModalOpen(true);
            const answer = guessLetters.join('');
            if (responses.length < question ) {
                setResponses([...responses, answer]);
            } else {
                const tab = responses;
                tab[question] = answer;
                setResponses([...tab]);
            }
        }
        // eslint-disable-next-line
    }, [isLoser]);


    const { setModalElement, setModalOpen, onClose, setQuestion } = useMainState();

    const isCorrect = (): boolean => {
        const res = responses[question] === ((cGame && cGame.questions[question].response) ? cGame.questions[question].response : undefined);
        if (res) {
            audioWin.play();
        } else {
            audioOver.play();
        }
        return res;
    }

    const audioWin = new Audio(gameWin);
    audioWin.volume = 1;
    const audioOver = new Audio(gameOver);
    audioOver.volume = 1;

    const navigate = useNavigate();

    return (<>
        <div className="w-full h-full relative rounded-xl p-4 bg-white border">
            <h1 className="text-2xl font-bold text-center">
                {cGame.questions[question].label}
            </h1>
            <div className="w-80 mx-auto scale-[0.3] h-44 relative -top-10">
                <Stickman numberOfGuess={incorrectLetters.length} />
            </div>
            
            <div className="flex items-center justify-center">
                <WordDraw 
                    guessLetters={guessLetters}
                    result={isLoser}
                    wordToGuess={cGame.questions[question].response.toLowerCase()} 
                />
            </div>

            <div className="flex items-center justify-center space-x-2 mt-10">
                <Keyboard keys={cGame.questions[question].key || []} 
                    disabled={isWinner || isLoser}
                    activeLetter={guessLetters.filter(letter => cGame.questions[question].response.includes(letter))}
                    inactiveLetter={incorrectLetters}
                    addGuessLetter={addGuessLetter}
                    sign={true}
                />
            </div>
            <div className="flex items-center justify-between w-full">
                <Button  className="w-full" active={true} label={
                    question < (cGame ? cGame?.questions.length : 0) - 1 ? "Suivant" : "Terminer"
                } action={() => {
                    if (question < (cGame ? cGame?.questions.length : 0) - 1) {
                        setQuestion(question + 1);
                        setGuessLetters([])
                    } else {
                        setModalElement(<>
                            <div className="flex flex-col items-center space-y-4">
                                <div className="text-2xl font-bold text-center">
                                    Félicitations, vous avez terminé le jeu !
                                </div>
                                <DisplayAnswer isCorrect={isCorrect()} />
                                <div className="flex items-center justify-center space-x-2">
                                    <Button label="Retourner" action={() => {
                                        navigate('/game');
                                        onClose();
                                    }} active={true} />
                                </div>
                            </div>
                        </>)
                        setModalOpen(true);
                        setGuessLetters([]);
                    }
                }} />
            </div>
        </div>
    </>)
}


