import { createGlobalStyle } from 'styled-components'

const ModuleStyle = createGlobalStyle`
    .wrapper {
        max-width: 1180px;
        padding: 0 16px;
        margin: 0 auto;
    }

    @media screen and (min-width: 800px) {
        padding: 0;
    }
`

export default ModuleStyle