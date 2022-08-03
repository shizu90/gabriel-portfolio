import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        &::-webkit-scrollbar {
            width: 5px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: ${props => props.theme.colors.backgroundLight};
        }
        &::selection {
            color: ${props => props.theme.colors.text};
            background-color: ${props => props.theme.colors.primary};
        }   
    }
    body {
        min-height: 100vh;
        background-color: ${props => props.theme.colors.background};
        background-repeat: no-repeat;
        color: ${props => props.theme.colors.text};
        font-family: Montserrat, sans-serif;
    }
`