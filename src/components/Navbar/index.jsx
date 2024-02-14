import { Link, useNavigate, useLocation } from 'react-router-dom'
import Wrapper from './Wrapper'
import Button from '../Button/index'

import MenuIcon from '/menu.svg'
import CartIcon from '/cart.svg'

function Navbar({products}) {
    let locationPath = useLocation().pathname
    let navigate = useNavigate()
    let pathAtRoot = Boolean(locationPath.match(/^\/$/))
    let pathAtCheckout = Boolean(locationPath.match(/\/checkout/));
    let totalNumberOfProducts = products.reduce(
        (acc, cur) =>  acc + cur.quantity,
        0,
    )
    let quantitySpan = (totalNumberOfProducts > 0) 
        ? <span className="cart-counter" data-testid='cart-counter'>{totalNumberOfProducts}</span>
        : null;

    const handleButtonClick = () => navigate('checkout')

    return (
    <Wrapper data-testid="navbar" $pathAtRoot={pathAtRoot}>
        <div className="wrapper">
            <div className="mobile-only"></div>

            <h1>Shopy</h1>

            <div className="desktop-only">
                <div className="navbar-item">
                    <Link to="/">home</Link>
                    <Link to="/shop">shop</Link>
                </div>
            </div>

            <div className="desktop-only">
                <div className="navbar-item">
                    <Link to="/checkout" className="cart">
                        {quantitySpan}
                        <img src={CartIcon} alt="Cart" />
                    </Link>
                    <Button to="/checkout" $ghost={pathAtCheckout} $arrow={!pathAtCheckout}>Checkout</Button>
                </div>
            </div>

            <button type="button" className="mobile-only">
                <img src={MenuIcon} alt="" />
            </button>
        </div>
    </Wrapper>
    )
}

export default Navbar