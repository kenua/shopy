import styled from 'styled-components'
import RightArrow from './RightArrow'

import figure1 from '/images/figure1.svg'
import squaresFigure from '/images/squaresFigure.svg'

function CurrentPage({ page }) {
    return (
        <Wrapper>
            <h1>{page}</h1>
            <p>Home <RightArrow /> {page}</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    text-align: center;
    background-color: #FCEDD2;
    background-image: url(${figure1});
    background-repeat: no-repeat;
    background-position: -68px -100%;
    background-size: 385px;
    height: 271px;
    position: relative;
    padding-top: 80px;
    margin-bottom: 60px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;

    h1 {
        font-size: 4rem;
        font-weight: 900;
        margin-bottom: 14px;
    }
    p {
        font-size: 1.8rem;
    }
    svg {
        margin: 0 9px;
    }

    @media screen and (min-width: 800px) {
        background-image: url(${figure1}), url(${squaresFigure});
        background-position: -68px -100%, 101% 40px;
        background-size: 385px, 140px;
    }
`

export default CurrentPage