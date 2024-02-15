import styled from 'styled-components'
import Button from './Button/index'

import shopWoman2S from '/images/shop-woman2-s.png'
import shopWoman2M from '/images/shop-woman2-m.png'
import shopWoman2L from '/images/shop-woman2-l.png'

function SpecialSales() {
    return (
        <Wrapper>
            <div className="figure"></div>
            <div className="figure figure--alpha"></div>
            <img 
                src={shopWoman2S} 
                srcSet={`${shopWoman2S} 800w, ${shopWoman2M} 900w, ${shopWoman2L} 1180w,`}
                alt="" 
                className="shop-woman"
            />
            <h2>
                special sales <br /> 
                <span>Every week</span>
            </h2>
            <p>
                At imperdiet dui accumsan sit amet nulla facilisi morbi. Aliquet
                sagittis id consectetur purus ut faucibus. Elementum curabitur
                vitae nunc sed velit dignissim sodales ut.
            </p>
            <Button to="/shop" $ghost $arrow>See more</Button>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background-color: #FFE7BA;
    text-align: right;
    padding: 50px 16px;
    position: relative;
    border-radius: 20px;
    margin: 60px 0;
    z-index: 2;
    overflow: hidden;

    .figure {
        background-color: #7BCAC5;
        width: 782px;
        height: 635px;
        border-radius: 99px;
        position: absolute;
        top: -300px;
        right: -500px;
        z-index: -1;
        transform: rotate(25deg);
    }
    .figure--alpha {
        background-color: #00000010;
        top: initial;
        bottom: -450px;
        left: -550px;
    }
    .shop-woman {
        width: 168px;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    h2 {
        text-transform: capitalize;
        font-size: 2.4rem;
        font-weight: 900;
    }
    h2 span {
        font-size: 1.6rem;
        font-weight: 500;
    }
    p {
        font-size: 1.4rem;
        max-width: 90%;
        margin: 8px 0 24px auto;
    }

    @media screen and (min-width: 800px) {
        padding: 50px 36px;

        .figure {
            top: -270px;
            right: -380px;
        }
        .figure--alpha {
            top: initial;
            bottom: -520px;
            left: -120px;
        }
        .shop-woman {
            width: 412px;
        }
        h2 {
            font-size: 5.2rem;
        }
        h2 span {
            font-size: 3.6rem;
        }
        p {
            font-size: 1.6rem;
            max-width: 75%;
        }
    }

    @media screen and (min-width: 1180px) {
        padding: 60px;
        margin: 120px 0;

        .figure {
            top: -210px;
            right: -140px;
        }
        .figure--alpha {
            top: initial;
            bottom: -520px;
            left: -120px;
        }
        .shop-woman {
            width: 549px;
        }
        p {
            max-width: 50%;
        }
    }
`

export default SpecialSales