import styled from 'styled-components'

const Wrapper = styled.div`
    .grid {
        display: grid;
        row-gap: 32px;
    }
    .checkout-container {
        text-align: center;
        background-color: #FFE7BA;
        width: 288px;
        height: 259px;
        margin: 0 auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 27px;
        border-radius: 20px;
        position: relative;
        z-index: 1;
        grid-row: 1;
        box-shadow: 0 4px 28px rgba(0,0,0, 0.08);
        overflow: hidden;

        &::before {
            content: "";
            background-color: #7BCAC5;
            width: 549px;
            height: 445px;
            display: block;
            border-radius: 69px;
            transform: rotate(25deg);
            position: absolute;
            bottom: -350px;
            left: -120px;
            z-index: -2;
        }
        &::after {
            content: "";
            background-color: rgba(0,0,0,0.1);
            width: 549px;
            height: 445px;
            display: block;
            border-radius: 69px;
            transform: rotate(25deg);
            position: absolute;
            bottom: -420px;
            left: -60px;
            z-index: -1;
        }
    }
    .total {
        font-weight: 900;
        font-size: 2.4rem;

        span {
            font-weight: 100;
        }
    }
    .subgrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(284px, 284px));
        justify-content: center;
        gap: 14px;
    }

    @media screen and (min-width: 1180px) {
        .grid {
            grid-template-columns: 284px 284px 1fr;
            justify-content: center;
            column-gap: 14px;
        }
        .subgrid {
            grid-column: 1 / 3;
            grid-row: 1;
            grid-template-columns: repeat(auto-fit, minmax(284px, 284px));
        }
        .checkout-container {
            width: 100%;
            height: 378px;
            row-gap: 27px;            
            grid-column: 3;
            grid-row: 1;

            &::before {
                bottom: -240px;
                left: -120px;
            }
            &::after {
                bottom: -320px;
                left: -60px;
            }
        }
        .total {
            font-size: 5.2rem;

            span {
                font-size: 3.6rem;
            }
        }
    }
`

export default Wrapper