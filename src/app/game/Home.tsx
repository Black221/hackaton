import ThemeDisplay from "../../components/ThemeDisplay";
import { gameThemes, getGameTheme } from "../../models/game"
import Audio from "../../components/Audio";

import braille from "../../assets/braille.svg";
import math from "../../assets/math.svg";
import hg from "../../assets/hg.svg";
import french from "../../assets/french.svg";
import sciences from "../../assets/sciences.svg";
import sign from "../../assets/sign.svg";
import useMainState from "../../hooks/useMainState";

import ModalElement from "../../components/ModalElement";
import Button from "../../components/Button";
import useConvert from "../../hooks/useConvert";
import { useNavigate } from "react-router-dom";


export default function Home() {

    const pos0: number = Object.values(gameThemes).toString().indexOf('0');
    const themes: string[] = Object.values(gameThemes).toString().substring(0, pos0 - 1).split(',');
    const icons = [braille, sign, french, math, sciences , hg];

    const { setModalElement, setModalOpen, onClose, setTheme } = useMainState();
    const convert = useConvert();
    const navigate = useNavigate();

    return (
        <div className="w-full flex flex-col items-center justify-center h-full space-y-5 ">
            <div>
            </div>
            <div className="flex-1">
                <div className="grid md:grid-cols-3 md:gap-5 grid-cols-2 gap-3">
                    {themes.map((theme, index) => {
                        if (theme === "none") return null;
                        return (
                            <div key={index}>
                                <ThemeDisplay theme={theme} icon={
                                    icons[index % icons.length]
                                } action={() => {
                                    setModalElement(
                                        <ModalElement
                                            title={convert(theme)}
                                            content={ <div>
                                                <div className="flex flex-col items-center space-y-6">
                                                    <img src={icons[index % icons.length]} alt="icon" className="w-[40%]" />
                                                    <div>
                                                        <Audio src={""} /> 
                                                    </div>
                                                </div>
                                            </div> }
                                            buttons={
                                                <div className="flex space-x-2 w-full">
                                                    <Button label="Cours" className="flex-1"  action={() => {
                                                        onClose();
                                                    }} active={true} />
                                                    <Button label="Exercices" className="flex-1" action={() => {
                                                        setTheme(
                                                            getGameTheme(theme)
                                                        );
                                                        navigate(`/game/${theme}`);
                                                        onClose();
                                                    }} active={true} />
                                                </div>
                                            }
                                        />
                                    );
                                    setModalOpen(true);
                                }} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}