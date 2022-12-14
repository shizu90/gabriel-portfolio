import { FaCode } from "react-icons/fa";
import { HomePage } from "./Style";
import toast from "react-hot-toast";


interface IHomeProps {
    color?: string | undefined
}

export default function Home(props: IHomeProps) {

    const copyEmail = (email: string) => {
        navigator.clipboard.writeText(email);
        toast.success(`Copied email! ${email}`);
    };

    return (
        <HomePage color={props.color}>
            <div>
                <p>Dev</p>
                <h1>{"<Gabriel Moretto/>"}</h1>
                <p>Software developer</p>
                <a onClick={() => copyEmail("gabriel.moretto9090@gmail.com")}>Contact</a>
            </div>
            <img src="homeIcon.svg" draggable={false}></img>
        </HomePage>
    )
}