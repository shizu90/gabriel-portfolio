import styled from "styled-components";

interface IFooterProps {
    color: string
}

export const FooterContainer = styled.div<IFooterProps>`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.color};
    justify-content: center;
    align-items: center;
    color: ${props => props.color === props.theme.colors.backgroundLight ? props.theme.colors.textDark : props.theme.colors.text};
    padding: 30px;
    text-align: center;
    hr {
        width: 100%;
        margin-bottom: 20px;
    }

    h1 {
        letter-spacing: 1px;
        font-weight: 500;
        font-size: 20px;
    }
    ul {
        list-style: none;
        margin-top: 20px;
        li {
            cursor: pointer;
            padding: 5px;
            a {
                color: inherit;
                text-decoration: underline;
            }
        }
    }
`