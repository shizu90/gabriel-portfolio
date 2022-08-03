import { FooterContainer } from "./Style";
import toast from "react-hot-toast";

interface FooterProps {
    color: string
}

export default function Footer(props: FooterProps) {

    const copyEmail = (email: string) => {
        navigator.clipboard.writeText(email);
        toast.success(`Copied email! ${email}`);
    };

    return (
            <FooterContainer color={props.color}>
                <hr/>
                <h1>Developed by @shizu90</h1>
                <ul>
                    <li><a href="https://github.com/shizu90" target="_blank">Github</a></li>
                    <li><a onClick={() => copyEmail("gabriel.moretto9090@gmail.com")}>Contact</a></li>
                </ul>
            </FooterContainer>
    )
}