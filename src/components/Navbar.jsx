import { Link, useNavigate } from 'react-router-dom'

function Navbar(props) {
    let navigate = useNavigate()

    const handleButtonClick = () => navigate('checkout')

    return (
    <header data-testid="navbar">
        <h1>Shopy</h1>
        <Link to="/">home</Link>
        <Link to="/shop">shop</Link>
        <button type="button" onClick={handleButtonClick}>cart</button>
        <button type="button" onClick={handleButtonClick}>checkout</button>
        <span>{props.quantity}</span>
    </header>
    )
}

export default Navbar