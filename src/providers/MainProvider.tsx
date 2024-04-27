
import  {createContext, useState} from "react";
import { Game, gameThemes } from "../models/game";
import { game } from "../data/games";

interface MainContext {
    modalElement: React.ReactNode | null;
    setModalElement: (element: React.ReactNode | null) => void;
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
    onClose: () => void;
    theme?: gameThemes;
    setTheme: (theme: gameThemes) => void;
    cGame: Game;
    setCGame: (game: Game) => void;
    responses: string[];
    setResponses: (responses: string[]) => void;
    score: number;
    setScore: (score: number) => void;
    question: number;
    setQuestion: (question: number) => void;
}

export const MainStateContext = createContext<MainContext>({} as MainContext);

interface MainContextProviderProps {
    children: React.ReactNode;
}

export const MainContextProvider = ({ children }: MainContextProviderProps) => {


    const [modalElement, setModalElement] = useState<React.ReactNode | null>(null);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const [theme, setTheme] = useState<gameThemes>(gameThemes.none);

    
        

    const [cGame, setCGame] = useState<Game>(game);

    const [responses, setResponses] = useState<string[]>([]);
    const [score, setScore] = useState<number>(0);
    const [question, setQuestion] = useState<number>(0);

    const onClose = () => {
        setModalOpen(false);
        setModalElement(null);
    }


    return (
        <MainStateContext.Provider value={{
            modalElement, setModalElement, modalOpen, setModalOpen, onClose, 
            theme, setTheme, cGame, setCGame,
            responses, setResponses, score, setScore, question, setQuestion
        }}>
            {children}
        </MainStateContext.Provider>
    )
}
