import styled from 'styled-components'

const Wrapper = styled.header`
    background-color: ${props => (props.$pathAtRoot) ? '#FFE7BA' : 'transparent'};
    height: 100px;
    position: relative;

    .wrapper {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h1 {
        font-size: 2.4rem;
        font-weight: 600;
        text-transform: uppercase;
        margin: 0;
        position: relative;
        z-index: 2;

        &::before {
            content: "";
            background-color: rgba(123, 202, 197, 0.4);
            display: block;
            width: 405px;
            height: 405px;
            border-radius: 99px;
            position: absolute;
            top: -367px;
            left: -223px;
            z-index: -1;
            transform: rotate(-65deg);

        }
    }
    .navbar-item {
        display: flex;
        column-gap: 48px;
        align-items: center;
    }
    a {
        font-size: 1.6rem;
        font-weight: 600;
    }
    .cart {
        position: relative;
    }
    .cart-counter {
        font-size: 1.4rem;
        font-weight: bold;
        line-height: 0.5;
        color: white;
        background-color: #D42B2B;
        padding: 5px;
        border-radius: 50px;
        position: absolute;
        top: -8px;
        right: -8px;
    }
    .desktop-only {
        display: none;
    }

    @media screen and (min-width: 800px) {
        h1 {
            width: 220px;
        }
        .desktop-only {
            display: block;
        }
        .mobile-only {
            display: none;
        }
    }
`

export default Wrapper