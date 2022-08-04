import { FaGithub, FaLinkedin, FaEnvelope, FaList } from "react-icons/fa";
import { NavbarContainer, ShowNavbar } from "./Style";
import theme from "../../styles/theme";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { ToastContainer } from "../../styles/ToastContainer";

interface NavbarProps {
    color?: string | undefined
}

export default function Navbar(props: NavbarProps) {
    const [show, setShow] = useState<boolean>(false);


    const copyEmail = (email: string) => {
        navigator.clipboard.writeText(email);
        toast.success(`Copied email! ${email}`);
    };

    return (
        <>    
            <NavbarContainer show={show} color={props.color}>
                <ShowNavbar onClick={() => setShow(!show)} ><FaList/></ShowNavbar>
                <div>
                    <img src="https://avatars.githubusercontent.com/u/85424804?s=400&u=4bf468d8b95bb61eeb78bc49e7f8ee6512248f51&v=4" draggable={false}></img>
                    <ul>
                        <li><a href="https://github.com/shizu90" target={"_blank"}><FaGithub/><span>Github</span></a></li>
                        <li><a target={"_blank"}><FaLinkedin/><span>Linkedin</span></a></li>
                        <li onClick={() => copyEmail("gabriel.moretto9090@gmail.com")}><a><FaEnvelope/><span>Contact</span></a></li>
                    </ul>
                </div>
            </NavbarContainer>
        </>
    )
}