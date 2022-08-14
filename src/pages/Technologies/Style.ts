import styled from "styled-components";

interface ITechnologiesPage {
    children?: JSX.Element | JSX.Element[]
    experienceCardShow?: boolean
    color?: string | undefined
}

export const TechnologiesPage = styled.section<ITechnologiesPage>`
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.color ? props.color : props.theme.colors.backgroundLight};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: ${props => props.color ? 
            props.color === props.theme.colors.backgroundLight ? 
                props.theme.colors.textDark : props.theme.colors.text : props.theme.colors.textDark};
    h1 {
        letter-spacing: 2px;
        font-weight: 400;
        margin-bottom: 20px;
        @media (max-width: 999px) {
            letter-spacing: 1px;
            font-size: 20px;
            margin-bottom: 10px;
        }
    }
    h2 {
        letter-spacing: 1px;
        font-weight: 400;
        font-size: 20px;
    }
    ul {
        list-style: none;
        font-size: 60px;
        display: flex;
        text-align: center;
        @media (max-width: 999px) {
            display: grid;
            font-size: 40px;
            grid-template-columns: auto auto auto;
        }
        li {
            display: flex;
            flex-direction: column;
            padding: 20px;
            transition: color 0.1s ease-out;
            cursor: pointer;
            @media (max-width: 999px) {
                padding: 10px;
            }
            &:hover>span {
                opacity: 1;
            }
        }
        span {
            font-size: 18px;
            opacity: 0;
        }
    }
    ul.techs {
        li {
            &:first-child:hover {
                color: #f5df36;
            }
            &:nth-child(2):hover {
                color: #135ecf;
            }
            &:nth-child(3):hover {
                color: #ed5113;
            }
            &:nth-child(4):hover {
                color: #3679f5;
            }
            &:nth-child(5):hover {
                color: #3b9dff;
            }
            &:nth-child(6):hover {
                color: black;
            }
            &:nth-child(7):hover {
                color: #34943c;
            }
            &:nth-child(8):hover {
                color: #d4810d;
            }
            &:nth-child(9):hover {
                color: #0a911c;
            }
        }
    }
    ul.databases {
        padding-left: 25px;
        li {
            &:first-child:hover {
                color: #0a316b;
            }
            &:nth-child(2):hover {
                color: #28579c;
            }
            &:nth-child(3):hover {
                color: #1a5209;
            }
        }
    } 
    div.experience-card {
        border: 2px solid ${props => props.theme.colors.textDark};
        padding: 20px;
        opacity: ${props => props.experienceCardShow ? 1 : 0};
        margin-bottom: 20px;
        div {
            display: flex;
            font-size: 15px;
            p {
                margin-right: 10px;
            }
        }
    }
`