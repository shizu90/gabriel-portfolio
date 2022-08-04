import styled from "styled-components";

interface IHomePageProps {
    color?: string
}

export const HomePage = styled.section<IHomePageProps>`
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.color ? props.color : props.theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.color ? 
            props.color === props.theme.colors.background ? 
                props.theme.colors.text : props.theme.colors.textDark : props.theme.colors.text};
    @media (max-width: 999px) {
        flex-direction: column;
    }
    h1 {
        letter-spacing: 2px;
        overflow: hidden;
        white-space: nowrap;
        margin: 0;
        width: auto;
        font-weight: 400;
        font-size: 40px;
        border-right: 2px solid ${props => props.theme.colors.primary};
        animation: typing 3.5s steps(25, end), blink-caret .75s step-end infinite;
        @media (max-width: 999px) {
            font-size: 25px;
        }
    }

    p {
        margin-top: 20px;
        font-size: 20px;
        width: 320px;
        margin-bottom: 20px;
        @media (max-width: 999px) {
            font-size: 15px;
            width: 200px;
        }
    }

    a {
        font-size: 20px;
        letter-spacing: 1px;
        border: 1px solid ${props => props.theme.colors.text};
        padding: 10px;
        transition: background-color 0.2s ease-out;
        cursor: pointer;
        &:hover {
            background-color: ${props => props.theme.colors.primary};
            border-color: transparent;
        }
    }

    img {
        width: 500px;
        height: auto;
        margin-left: 10%;
    }
    div:last-child {
        margin-left: 20px;
    }

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: ${props => props.theme.colors.primary} }
    }
`