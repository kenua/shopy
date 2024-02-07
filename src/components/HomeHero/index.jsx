import Wrapper from './Wrapper'
import Button from '../Button/index'

import shopWoman1S from '/images/shop-woman1-s.png'
import shopWoman1M from '/images/shop-woman1-m.png'
import shopWoman1L from '/images/shop-woman1-l.png'
import figure1 from '/images/figure1.svg'
import squaresFigure from '/images/squaresFigure.svg'

function HomeHero() {
    return (
        <Wrapper>
            <div className="wrapper">
                <div className="left-column">
                    <h1 className="heading">Shop</h1>
                    <h2 className="subheading">to your heart’s content</h2>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor.</p>
                    <div className="">
                        <Button to="/shop" $arrow>Explore</Button>
                    </div>
                </div>
                <div className="right-column">
                    <img 
                        src={shopWoman1S} 
                        srcSet={` ${shopWoman1S} 500w, ${shopWoman1M} 780w, ${shopWoman1L} 900w,`}
                        alt="" 
                        className="shop-woman"
                    />
                </div>
                <img src={figure1} alt="" className="figure-1" />
                <div className="figure-2"></div>
            </div>
            <img src={squaresFigure} alt="" className="squaresFigure" />
        </Wrapper>
    )
}

export default HomeHero