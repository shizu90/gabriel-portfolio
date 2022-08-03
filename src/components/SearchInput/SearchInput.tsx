import { useState } from "react";
import { Input } from "./Style";
import useDebounce from "../../hooks/useDebounce";

interface SearchInputProps {
    color: "dark" | "light"
    onText: (...params: any) => void
    value: string | undefined
}

export default function SearchInput(props: SearchInputProps) {
    const [displayValue, setDisplayValue] = useState<string | undefined>(props.value);
    const debouncedChange = useDebounce(props.onText, 700)

    const handleChange = (e: any) => {
        setDisplayValue(e.target.value);
        debouncedChange(e.target.value);
    }

    return (
        <Input type="text" onChange={(e) => handleChange(e)} value={displayValue} color={props.color}></Input>
    )
}