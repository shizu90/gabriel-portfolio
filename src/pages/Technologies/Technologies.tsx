import { TechnologiesPage } from "./Style";
import { useContext, useEffect, useState } from "react";
import { ScrollContext } from "../../context/ScrollContext";
import StarRatingComponent from "react-star-rating-component";
import theme from "../../styles/theme";

interface ITechnologiesProps {
    color?: string | undefined
}

export default function Technologies(props: ITechnologiesProps) {
    const scrollContext = useContext(ScrollContext);
    const [tech, setTech] = useState({tech: "", experience: 0});

    const techsArray = ["Javascript", "Typescript", "HTML5", "CSS3", "ReactJS", "NextJS", "NodeJS", "C#", ".NET Core"];
    const iconsArray = [
        "devicon-javascript-plain", 
        "devicon-typescript-plain", 
        "devicon-html5-plain", 
        "devicon-css3-plain",
        "devicon-react-original",
        "devicon-nextjs-original",
        "devicon-nodejs-plain",
        "devicon-csharp-plain",
        "devicon-dotnetcore-plain"
    ];
    const techsExperience = [4, 3, 4, 4, 3, 2, 3, 3, 2];

    const changeTech = (techObj: any) => {
        if(tech.tech.length === 0 && tech.experience === 0) return setTech(techObj);
        if(techObj.tech === tech.tech && techObj.experience === tech.experience) return setTech({tech: "", experience: 0});
        return setTech(techObj);
    }
    return (
        <TechnologiesPage experienceCardShow={tech.tech ? true : false} color={props.color}>
            <h1>Technologies i am currently working with: </h1>
            <ul className="techs">
                {techsArray.map((item, index) => (
                    <li onClick={() => changeTech({tech: item, experience: techsExperience[index]})} key={item}>
                        <i className={iconsArray[index]}></i>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <div className="experience-card">
                <h1>{tech.tech.length > 0 ? tech.tech : "Loading"}</h1>
                <div>
                    <p>Experience: </p>
                    <StarRatingComponent name="experience" value={tech.experience} starColor={theme.colors.primary} emptyStarColor={theme.colors.backgroundLight} editing={false}/>
                </div>
            </div>
            <h2>Databases: </h2>
            <ul className="databases">
                <li>
                    <i className={"devicon-mysql-plain"}></i>
                    <span>MySql</span>
                </li>
                <li>
                    <i className={"devicon-postgresql-plain"}></i>
                    <span>PostgreSQL</span>
                </li>
                <li>
                    <i className={"devicon-mongodb-plain"}></i>
                    <span>MongoDB</span>
                </li>
            </ul>
        </TechnologiesPage>
    )
}