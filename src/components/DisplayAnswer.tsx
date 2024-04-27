
import correct from "../assets/good.gif";
import incorrect from "../assets/bad.gif";

interface DisplayAnswer {
    isCorrect: boolean;
}


export  default function DisplayAnswer({isCorrect}: DisplayAnswer) {

    return (<>
        <div className="flex flex-col items-center justify-center space-y-4 min-w-64">
            <div className="w-48 h-48">
                <img src={isCorrect ? correct : incorrect} alt="answer" className="w-48 h-48" />
            </div>
            <p className="text-2xl font-bold text-center">
                {isCorrect ? "Super!" : "Raté!!!"}
            </p>
        </div>
    </>)
}