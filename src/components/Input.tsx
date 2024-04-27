

interface InputProps {
    label: string;
    value: string | number;
    type?: string;
    onChange: (value: string) => void;
}
export default function Input(
    { label, value, onChange, type }: InputProps
) {

    return (<>
        <div className="w-full flex flex-col space-y-1">
            <label htmlFor="name">{label}</label>
            <input type={type} id="name" className="border p-2 rounded-md" value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    </>)
}