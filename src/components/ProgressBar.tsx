import { useEffect, useState } from "react";


interface ProgressBarProps {
    max: number;
    progress: number;
}

export default function ProgressBar({ max, progress } : ProgressBarProps) {

    const [percent, setPercent] = useState<number>(0);

    useEffect(() => {
        const newPercent = (progress / max) * 100;
        setPercent(Math.round(newPercent / 5) * 5);
        setPercent(newPercent);
    }, [progress, max]);

    return (<>
        <div className="w-full h-2 bg-gray-400 rounded-full overflow-hidden relative">
            <div className={"h-full bg-green-500 rounded-lg transition ease-out duration-100"} style={{ width: `${percent.toFixed(0)}%` }} />
        </div>
    </>)
}