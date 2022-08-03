import { ProjectsPage } from "./Style";
import SearchInput from "../../components/SearchInput/SearchInput";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import theme from "../../styles/theme";
import { FaLongArrowAltRight } from "react-icons/fa";


interface IProjectsProps {
    color?: string | undefined
}

export default function Projects(props: IProjectsProps) {
    const [text, setText] = useState<string | undefined>("");
    const [repositories, setRepositories] = useState<Array<object>>([]);
    const [status, setStatus]= useState<number | undefined>(undefined);

    useEffect(() => {
        if(text) {
            setStatus(undefined);
            setRepositories([]);
            fetch(`https://api.github.com/search/repositories?q=${text}+user:shizu90`)
            .then(res => res.json()).then(res => {
                if(res) { 
                    setStatus(res.total_count);
                    const result = res.items.map((item: any, index: number) => {
                        if(item.owner.login === "shizu90") {
                            return item
                        }
                    });
                    if(result) setRepositories(result);
                }
            })
        }
    }, [text])

    return (
        <ProjectsPage color={props.color}>
            <div className={"projects"}>
                <h1 className={"title"}>Projects: </h1>
                <ul>
                    <li>
                        <h1>Muramasa</h1>
                        <p>Website that acts like an anime/manga database, fetching api from kitsu and bootstrapped with NextJS.</p>
                        <div>
                            <a href="https://github.com/shizu90/muramasa-app" target={"_blank"}>Repository</a>
                            <a>Website</a>
                        </div>
                    </li>
                    <li>
                        <h1>Forum app</h1>
                        <p>Project bootstrapped with Angular CLI and api made with NodeJS, integrating with PostgreSQL and MongoDB</p>
                        <div>
                            <a href="https://github.com/shizu90/cod3r-projeto" target={"_blank"}>Repository</a>
                            <a>Website</a>
                        </div>
                    </li>
                    <li>
                        <h1>ASP.NET CRUD</h1>
                        <p>ASP.NET CRUD integrating with MySql and using MVC pattern.</p>
                        <div>
                            <a href="https://github.com/shizu90/aspnet-mvc" target={"_blank"}>Repository</a>
                            <a>Website</a>
                        </div>
                    </li>
                    <li>
                        <h1>Notepad</h1>
                        <p>Notepad CRUD integrating with firebase.</p>
                        <div>
                            <a href="https://github.com/shizu90/notepad-app" target={"_blank"}>Repository</a>
                            <a>Website</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={"searchDiv"}>
                <h1 className={"title"}>Search github repositories: </h1>
                <SearchInput color="dark" value={text} onText={setText}/>
                <ul>
                    {text && repositories.length > 0 && status !== undefined ? 
                        repositories.map((item: any, index: number) => (
                            item !== undefined ? (
                                <li key={index}>
                                    <h1>{item.name}</h1>
                                    <p>{item.description ? item.description : "No description"}<a href={item.html_url} target="_blank"><FaLongArrowAltRight/></a></p>
                                </li>
                            ) : null
                        ))
                    : text && status === undefined ? (
                        <TailSpin
                        height={"80"}
                        width={"80"}
                        color={theme.colors.primary}
                        wrapperClass={"loading"}
                        />
                    ) : text && status === 0 && (
                        <p className="notfound">Not found</p>
                    )}
                </ul>
            </div>
        </ProjectsPage>
    )
}