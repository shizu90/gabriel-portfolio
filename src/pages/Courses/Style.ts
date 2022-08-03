import styled from "styled-components";

interface ICoursesPage {
    color?: string | undefined
}

export const CoursesPage = styled.section<ICoursesPage>`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.color ? props.color : props.theme.colors.background};
    align-items: center;
    justify-content: center;
    color: ${props => props.color ? 
                props.color === props.theme.colors.background ? 
                    props.theme.colors.text : props.theme.colors.textDark : props.theme.colors.text};
    h1 {
        font-weight: 400;
        letter-spacing: 2px;
        margin-bottom: 20px;
        @media (max-width: 999px) {
            font-size: 20px;
        }
    }
    h2 {
        font-weight: 400;
        font-size: 20px;
        letter-spacing: 2px;
        @media (max-width: 999px) {
            font-size: 18px;
        }
    }
    p {
        margin-top: 10px;
        span {
            font-weight: 500;
        }
        @media (max-width: 999px) {
            font-size: 14px;
        }
    }
    ul {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 30px;
        list-style: none;
        @media (max-width: 999px) {
            display: flex;
            flex-direction: column;
        }
        img {
            width: 70px;
            height: 70px;
            margin-right: 20px;
            @media (max-width: 999px) {
                width: 40px;
                height: 40px;
            }
        }
        li {
            padding: 20px;
            border: 2px solid ${props => props.theme.colors.text};
            display: flex;
            width: 478px;
            transition: border-color 0.2s ease-out;
            @media (max-width: 999px) {
                width: 300px;
                font-size: 18px;
                padding: 10px;
            }
            &:hover {
                border: 2px solid ${props => props.theme.colors.primary};
            }
        }

    }
`