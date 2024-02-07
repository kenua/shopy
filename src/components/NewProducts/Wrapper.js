import styled from 'styled-components'

const Wrapper = styled.section`
    padding: 60px 0;
    display: grid;

    .heading {
        text-transform: capitalize;
        font-size: 16px;
        font-weight: normal;
        grid-row: 1;
        line-height: 36px;
        margin-bottom: 28px;
    }
    .heading span {
        color: #7BCAC5;
        font-size: 2rem;
        font-weight: 900;
    }
    .subgrid {
        grid-row: 2;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 14px;
        overflow-x: auto;

        @media screen and (min-width: 1180px) {
            overflow-x: hidden;
        }
    }
    .button-container {
        text-align: center;
        grid-row: 3;
        margin-top: 50px;
    }

    @media screen and (min-width: 800px) {
        .heading {
            grid-column: 1;
            grid-row: 1;
        }
        .heading span {
            font-size: 2.4rem;
        }
        .subgrid {
            grid-column: 1 / 3;
            grid-row: 2;
        }
        .button-container {
            grid-column: 2;
            grid-row: 1;
            margin-top: 0px;
            display: flex;
            justify-content: end;
            align-items: center;
        }
    }
`

export default Wrapper