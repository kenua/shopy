import styled from 'styled-components'

const Wrapper = styled.header`
    background-color: ${props => (props.$pathAtRoot) ? '#FFE7BA' : 'transparent'};
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    position: relative;

    h1 {
        text-transform: uppercase;
        position: relative;
        z-index: 2;

        &::before {
            content: "";
            background-color: rgba(123, 202, 197, 0.4);
            display: block;
            width: 635px;
            height: 635px;
            border-radius: 99px;
            position: absolute;
            top: -637px;
            left: -403px;
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
        font-weight: bold;
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
        padding: 0 130px;

        .desktop-only {
            display: block;
        }
        .mobile-only {
            display: none;
        }
    }
`

export default Wrapper