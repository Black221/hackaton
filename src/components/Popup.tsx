

interface PopupProps {
    title: string;
    content: string;
    buttons?: JSX.Element;
}
export default function Popup({ title, content, buttons }: PopupProps) {

    return (
        <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-1/2 h-1/2 bg-white flex flex-col items-center justify-center rounded-lg">
                <h1 className="text-2xl">{title}</h1>
                <p>{content}</p>
                {buttons}
            </div>
        </div>
    )
}