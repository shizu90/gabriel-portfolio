import { createContext, useState} from "react";
import { ScrollContextType } from "./@types/scroll";

export const ScrollContext = createContext<ScrollContextType | null>(null)

const ScrollProvider = ({children}: any) => {
    const [scroll, setScroll] = useState<number>()
    
    return (
        <ScrollContext.Provider value={{ 
            scroll, setScroll
        }}>
        {children}
        </ScrollContext.Provider>
    )

}
export default ScrollProvider