import { css } from 'styled-components'

const buttonStyles = css`
    text-transform: capitalize; 
    font-size: 1.6rem;
    background-color: ${(props) => props.$ghost ? 'transparent' : '#7BCAC5'};
    border: ${(props) => props.$ghost ? '1px solid #7BCAC5' : 'none'};
    font-weight: 600;
    padding: 14px 28px;
    border-radius: 57px;

`

export default buttonStyles