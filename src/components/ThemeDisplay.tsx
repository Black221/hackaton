import useConvert from "../hooks/useConvert";

interface ThemeDisplayProps {
    theme: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    action?: () => void;
}

export default function ThemeDisplay({ theme, icon, action }: ThemeDisplayProps) {

    const convert = useConvert();

    return (<>
        <div onClick={action} className="w-32 h-32 p-4 m-4 bg-green-2 bg-opacity-20 border-1 border-green-2 rounded-lg flex flex-col items-center justify-center cursor-pointer">
            <img src={icon} alt={theme} className="w-16 h-16" />
            <span className="text-base font-semibold text-center">{convert(theme)}</span>
        </div>
    </>)
}