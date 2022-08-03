import styled from "styled-components";

interface InputProps {
    color?: "dark" | "light"
}

export const Input = styled.input<InputProps>`
    padding: 10px;
    width: 300px;
    font-family: Montserrat, sans-serif;
    letter-spacing: 1px;
    font-weight: 400;
    font-size: 20px;
    outline: none;
    border: 1px solid ${props => props.color === "dark" ? props.theme.colors.textDark : props.theme.colors.text};
`