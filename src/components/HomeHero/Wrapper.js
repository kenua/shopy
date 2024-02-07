import styled from 'styled-components'

const Wrapper = styled.section`
    background-color: #FFE7BA;
    padding: 40px 0 0;
    overflow: hidden;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    position: relative;

    .wrapper {
        display: grid;
        position: relative;
    }
    .left-column {
        z-index: 4;
    }
    .right-column {
        z-index: 3;
    }
    .figure-1 {
        width: calc(353px + 50vw);
        position: absolute;
        bottom: -100px;
        right: -120px;
        z-index: 2;
    }
    .figure-2 {
        display: none;
    }
    .squaresFigure {
        display: none;
    }
    .heading {
        font-weight: 900;
        font-size: 4rem;
        margin-bottom: 4px;
        position: relative;

        &::before {
            content: "";
            background-color: rgba(123, 202, 197, 0.4);
            width: 67px;
            height: 67px;
            display: block;
            border-radius: 20px;
            transform: rotate(25deg);
            position: absolute;
            top: -5px;
            left: -10px;
            z-index: -1;
        }
    }
    .subheading {
        font-weight: 500;
        font-size: 2.3rem;
        text-transform: capitalize;
        margin-bottom: 24px;
    }
    p {
        margin-bottom: 34px;
    }
    .shop-woman {
        width: 100%;
        margin-top: 24px;
    }

    @media screen and (min-width: 800px) {
        padding: 0;
        height: 595px;

        .wrapper {
            height: 100%;
            display: grid;
            grid-template-columns: 500px 1fr;
        }
        .left-column {
            max-width: 500px;
            grid-column: 1;
            grid-row: 1 / 2;
            
        }
        .right-column {
            grid-column: 1 / 3;
            grid-row: 1 / 2;
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: end;
        }
        .figure-1 {
            width: 635px;
        }
        .figure-2 {
            background-color: rgba(123, 202, 197, 0.4);
            width: 635px;
            height: 635px;
            border-radius: 99px;
            display: block;
            position: absolute;
            bottom: -105%;
            left: -150px;
            transform: rotate(56deg);
        }
        .squaresFigure {
            display: block;
            position: absolute;
            top: 48px;
            left: 50%;
        }
        .heading {
            font-size: 6rem;
            margin-top: 80px;
        }
        .subheading {
            font-size: 4.6rem;
        }
        .shop-woman {
            max-width: 711px;
            margin: 0 -180px 0 0;
        }
    }

    @media screen and (min-width: 1180px) {
        .figure-1 {
            width: 830px;
            bottom: -285px;
            right: -170px;
        }
        .shop-woman {
            margin: 58px 0px 0 -58px;
        }
    }
`

export default Wrapper