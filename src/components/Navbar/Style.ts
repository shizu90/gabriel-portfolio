import styled from "styled-components";

interface NavbarContainerProps {
    show?: boolean
    color?: string | undefined
}

export const ShowNavbar = styled.span`
    margin: 20px;
    font-size: 30px;
    position: absolute;
    right: 0;
    cursor: pointer;
    display: none;
    color: ${props => props.theme.colors.primary};
    @media (max-width: 999px) {
        display: block;
    }
`

export const NavbarContainer = styled.div<NavbarContainerProps>`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    width: 80px;
    position: fixed;
    align-items: center;
    text-align: center;
    transition: width 0.3s ease-out;
    padding-top: 50px;
    padding-bottom: 50px;
    @media (max-width: 999px) {
        padding: 0;
        width: 100%;
        transition: opacity 0.2s ease-out;
        background-color: ${props => props.theme.colors.background}cc;
    }
    div {
        display: flex;
        flex-direction: column;
        opacity: 1;
        transition: opacity 0.2s ease-out;
        align-items: center;
        margin-top: 60px;
        @media (max-width: 999px) {
            opacity: ${props => props.show ? "1" : "0"};
            display: ${props => props.show ? "flex" : "none"};
        }
    }
    img {
        width: 60%;
        height: 60%;
        border-radius: 100%;
        transition: width 0.3s ease-in-out;
        @media (max-width: 999px) {
            width: 70px;
            height: 70px;
        }
    }

    ul {
        list-style: none;
        margin-top: 20px;
        
        li {
            font-size: 30px;
            padding: 20px;
            a {
                display: flex;
                text-decoration: none;
                color: ${props => props.color ? props.color : ""};
                cursor: pointer;
                @media (max-width: 999px) {
                    color: ${props => props.theme.colors.text};
                }
            }
            span {
                opacity: 0;
                width: 0;
                position: absolute;
                font-size: 20px;
                font-weight: 400;
                margin-top: 5px;
                margin-left: 40px;
                transition: opacity 0.1s ease-out;
                @media (max-width: 999px) {
                    opacity: 1;
                    width: auto;
                    position: relative;
                    margin-left: 10px;
                }
            }
            &:hover>a>span, &:hover>button>span {
                opacity: 1;
                width: auto;
            }
        }
    }
`