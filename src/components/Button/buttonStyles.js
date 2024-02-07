import { css } from 'styled-components'

const buttonStyles = css`
    text-transform: capitalize;
    text-align: ${(props) => props.$expand ? 'center' : 'left'};
    font-size: 1.6rem;
    background-color: ${(props) => props.$ghost ? 'transparent' : '#7BCAC5'};
    border: ${(props) => props.$ghost ? '1px solid #7BCAC5' : 'none'};
    font-weight: 600;
    padding: 14px 28px;
    border-radius: 57px;
    display: ${(props) => props.$expand ? 'block' : 'inline-block'};

    svg {
        margin-left: 16px;
    }

`

export default buttonStyles