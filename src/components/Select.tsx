import { useState } from "react";
import useConvert from "../hooks/useConvert";


export interface SelectProps {
    label: string;
    onChange: (value: string) => void;
    options: string[];
}

export default function Select(
    { label, onChange, options }: SelectProps
) {

    const [value, setValue] = useState<string>(options[0]);
    const convert = useConvert();

    return (<>
        <div className="w-full flex flex-col space-y-2">
            <label htmlFor="name">{label}</label>
            <select id="name" className="border p-2 rounded-md" value={value} onChange={(e) => {
                onChange(e.target.value);
                setValue(e.target.value);
            }}>
                {options.map((option, index) => (
                    <option key={index} value={option}>{
                        convert(option)
                    }</option>
                ))}
            </select>
        </div>
    </>)
}