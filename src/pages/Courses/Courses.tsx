import { CoursesPage } from "./Style";

interface ICoursesProps {
    color?: string | undefined
}

export default function Courses(props: ICoursesProps) {
    return (
        <CoursesPage color={props.color}>
            <h1>Certifications: </h1>
            <ul>
                <li>
                    <img src="alura.jpg" draggable={false}></img>
                    <div>
                        <h2>Alura</h2>
                        <p><span>Javascript</span>: OOP, async functions and more.</p>
                        <p>118 hours</p>
                    </div>
                </li>
                <li>
                    <img src="alura.jpg" draggable={false}></img>
                    <div>
                        <h2>Alura</h2>
                        <p><span>MySql</span>: creating querys.</p>
                        <p>26 hours</p>
                    </div>
                </li>
                <li>
                    <img src="udemy.png" draggable={false}></img>
                    <div>
                        <h2>Udemy</h2>
                        <p><span>Cod3r</span>: full-stack web development.</p>
                        <p>102 hours</p>
                    </div>
                </li>
                <li>
                    <img src="udemy.png" draggable={false}></img>
                    <div>
                        <h2>Udemy</h2>
                        <p><span>Nélio Alves</span>: OOP with C#</p>
                        <p>40 hours</p>
                    </div>
                </li>
            </ul>
        </CoursesPage>
    )
}