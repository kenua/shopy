import { createGlobalStyle } from 'styled-components'

const ResetStyle = createGlobalStyle`
    *, 
    *::before, 
    *::after {
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    body {
        color: #1E1E1E;
    }
    a {
        text-transform: capitalize;
        color: inherit;
        text-decoration: none;
    }
    button {
        color: inherit;
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 0;
        margin: 0;
    }
    input {
        border: none;
        background-color: transparent;
        padding: 0;
        margin: 0;
    }
    img {
        max-width: 100%;
        display: block;
    }
`

export default ResetStyle