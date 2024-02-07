import styled from 'styled-components'

const Wrapper = styled.article`
    width: 284px;
    border-radius: 20px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 28px rgba(0,0,0, 0.08);

    .image {
        background-size: 65%;
        background-position: center;
        background-repeat: no-repeat;
        height: 264px;
        border-radius: 20px;
        position: relative;
    }
    .question-mark {
        position: absolute;
        top: 0;
        right: 0;
        cursor: help;
    }
    .description {
        background-color: white;
        font-size: 1.2rem;
        width: 100%;
        padding: 16px;
        border-radius: 12px;
        border-top-right-radius: 0;
        position: absolute;
        top: 20px;
        left: 0;
        box-shadow: 0 4px 30px rgba(0,0,0, 0.3);
    }
    h3 {
        font-size: 1.6rem;
        font-weight: normal;
        text-transform: capitalize;
    }
    .price {
        font-size: 2.4rem;
        font-weight: 600;
        margin: 5px 0 36px;
    }
    .quantity-control {
        height: 44px;
        display: grid;
        grid-template-columns: 1fr 164px 1fr;
        border-radius: 30px;
        border: 1px solid #1E1E1E;
        margin-bottom: 10px;
        overflow: hidden;
    }
    .quantity-control__input {
        font-size: 1.8rem;
        text-align: center;
    }
    .quantity-control__button {
        font-size: 20px;

        &:hover {
            background-color: rgba(123, 202, 197, 0.4);
        }
    }
`

export default Wrapper