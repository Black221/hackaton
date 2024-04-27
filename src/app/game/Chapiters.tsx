import Button from "../../components/Button";
import useMainState from "../../hooks/useMainState"
import { getGames } from './../../data/games';
import { Game, gameThemes, getGameThemeString } from "../../models/game";
import ChapiterItem from "./ChapiterItem";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import back from "../../assets/back.svg";
import brailleBg from "../../assets/braille-bg.avif";

export default function Chapiters() {

    const { theme } = useMainState();
    const navigate = useNavigate();

    const gamesByTheme = getGames(getGameThemeString(theme));

    if (theme === gameThemes.none || theme === undefined) {
        navigate('/game');
    }

    const ref = useRef<HTMLDivElement>(null);
    const gameBgs = [brailleBg];

    const { setCGame, setResponses, setQuestion } = useMainState();
    const [selected, setSelected] = useState<Game | null>(null);

    useEffect(() => {
        setResponses([]);
        setQuestion(0);
        //eslint-disable-next-line
    }, []);

    return (
        <div className="flex flex-col items-center  w-full h-full space-y-4  px-4 mt-2">
            <div className="w-full flex items-center justify-between text-start text-2xl font-bold space-x-2">
                <div>
                    Thème: { getGameThemeString(theme)}
                </div>
                <Button label={
                    <img src={back} alt="back" className="w-6 h-6 text-white" />
                } action={
                    () => navigate('/game')
                } active={true}  />
            </div>
            <div ref={ref} className="w-full relative border-2 rounded-xl overflow-scroll overflow-x-hidden h-[56vh] flex items-center justify-center flex-wrap content-start ">
                <div className="fixed   -z-10">
                    <img src={gameBgs[0]} alt="bg" className="w-full h-full object-cover" />
                </div>
                {gamesByTheme.map((game, index) => {
                    return (
                        //curve display
                        <div key={index} className="w-1/2 h-1/2 flex items-center justify-center">
                            <ChapiterItem game={game} action={() => {
                                setSelected(game);
                            }} isSelected={
                                selected === game
                            } />
                        </div>
                    )
                })}
            </div>
            <div className="w-full text-end">
                <Button label="Continuer" action={() => {
                    if (selected !== null) {
                        setCGame(selected)
                        navigate(`/game/${theme}/${selected.id}`);
                    }
                }} active={true} />
            </div>
        </div>
    )
}