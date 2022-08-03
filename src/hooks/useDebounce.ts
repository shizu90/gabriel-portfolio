import { useRef } from "react";

export default function useDebounce(func: any, delay: any) {
    const timeOutRef = useRef<any>()

    function debouncedFunction(...args: any) {
        window.clearTimeout(timeOutRef.current)
        timeOutRef.current = window.setTimeout(() => {
            func(...args)
        }, delay)
    }

    return debouncedFunction
}