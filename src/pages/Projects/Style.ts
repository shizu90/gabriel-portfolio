import styled from "styled-components";

interface IProjectsPage {
    color?: string | undefined
}

export const ProjectsPage = styled.section<IProjectsPage>`
    width: 100%;
    min-height: 100vh;
    display: flex;
    background-color: ${props => props.color ? props.color : props.theme.colors.backgroundLight};
    justify-content: center;
    align-items: center;
    color: ${props => props.color ? 
                props.color === props.theme.colors.backgroundLight ? 
                    props.theme.colors.textDark : props.theme.colors.text : props.theme.colors.textDark};
    @media (max-width: 999px) {
        flex-direction: column;
    }
    h1 {
        font-size: 20px;
        letter-spacing: 1px;
        font-weight: 500;
    }
    
    div {
        display: flex;
        flex-direction: column;
        h1.title {
            align-self: center;
            margin-bottom: 20px;
            padding-top: 30px;
        }
        ul {
            list-style: none;
        }
    }

    div.projects {
        margin-right: 5%;
        border-right: 1px solid ${props => props.theme.colors.textDark};
        padding-right: 5%;
        @media (max-width: 999px) {
            padding-right: 0;
            border: none;
            margin-right: 0;
            margin-bottom: 10%;
        }
        ul {
            display: grid;
            grid-template-columns: auto auto;
            grid-gap: 20px;
            @media (max-width: 999px) {
                display: flex;
                flex-direction: column;
            }
            li {
                width: 300px;
                height: auto;
                border: 1px solid ${props => props.theme.colors.textDark};
                padding: 10px;
                h1 {
                    margin-bottom: 10px;
                }
                p {

                }
                div {
                    display: flex;
                    margin-top: 10px;
                    flex-direction: row;
                    bottom: 0;
                    a {
                        text-decoration: none;
                        color: inherit;
                        border: 1px solid ${props => props.theme.colors.textDark};
                        align-self: center;
                        padding: 10px;
                        margin-right: 20px;
                        cursor: pointer;
                        transition: background-color 0.2s ease-out;
                        &:hover {
                            background-color: ${props => props.theme.colors.primary};
                            border-color: transparent;
                            color: ${props => props.theme.colors.text};
                        }
                    }
                }
            }
        }
    }

    div.searchDiv {
        align-items: center;
        margin-bottom: 20px;
        ul {
            li {
                width: 300px;
                padding: 10px;
                border: 1px solid ${props => props.theme.colors.textDark};
                margin-top: 20px;
                h1 {
                    margin-bottom: 10px;
                }
                p {
                    a {
                        float: right;
                        font-size: 20px;
                        color: inherit;
                        transition: color 0.2s ease-out;
                        &:hover {
                            color: ${props => props.theme.colors.primary};
                        }
                    }
                }
            }
            .loading, p.notfound {
                margin-top: 20px;
            }
        }
    }
`