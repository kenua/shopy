import { Link, useNavigate } from 'react-router-dom'

function Navbar({products}) {
    let navigate = useNavigate()
    let totalNumberOfProducts = products.reduce(
        (acc, cur) =>  acc + cur.quantity,
        0,
    )
    let quantitySpan = (totalNumberOfProducts > 0) 
        ? <span data-testid='cart-counter'>{totalNumberOfProducts}</span>
        : null;

    const handleButtonClick = () => navigate('checkout')

    return (
    <header data-testid="navbar">
        <h1>Shopy</h1>
        <Link to="/">home</Link>
        <Link to="/shop">shop</Link>
        <button type="button" onClick={handleButtonClick}>
            {quantitySpan}
            cart
        </button>
        <button type="button" onClick={handleButtonClick}>checkout</button>
    </header>
    )
}

export default Navbar