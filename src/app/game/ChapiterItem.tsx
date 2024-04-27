import { Game } from "../../models/game"
import star from "../../assets/star.svg";

interface ChapiterItemProps {
    game: Game;
    action: () => void;
    isSelected: boolean;
}

export default function ChapiterItem({ game, action, isSelected }: ChapiterItemProps) {

    return (<>
        <div onClick={action} className={`${game.isCompleted ? "bg-opacity-30" : ""} ${isSelected ? "border-2 border-blue-1": "border-gray-400"} rounded-xl    bg-white shadow drop-shadow text-white flex items-center justify-center`}>
            <div className="w-20 h-20 flex items-center justify-center">
                <img src={star} alt="star" className="w-20 h-20" />
            </div>
            <div className="w-full h-12 flex items-center justify-center">
                <p className="text-center text-black font-bold">
                    {game.name}
                </p>
            </div>
        </div>
    </>)
}