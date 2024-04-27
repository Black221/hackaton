


interface ButtonProps {
    label: React.ReactNode;
    action: () => void;
    active: boolean;
    color?: string;
    className?: string;
}

export default function Button ({ label, action, active, color = "bg-green-3", className } : ButtonProps) {

    return(<>
        <button  onClick={
            () => { if (active) action();}
        } className={`px-8 py-2 m-2 rounded-md ease-linear duration-75 delay-75 ${active ? color : 'bg-gray-400'} ${className}`}>
            <span className={`font-semibold text-lg text-white`}>{label}</span>
        </button>
    </>)
}

