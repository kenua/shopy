import ProductItem from '../../components/ProductItem/index'
import Button from '../../components/Button/index'
import Wrapper from './Wrapper'

function Checkout({ products, updateProduct }) {
    let productsList = products
        .filter(productObj => productObj.quantity > 0)
        .map(productObj => (
            <ProductItem 
                key={productObj.id} 
                product={productObj} 
                updateProduct={updateProduct}
            />
        ))
    let totalPrice = products
        .reduce((acc, cur) => (cur.price * cur.quantity) + acc, 0)
        .toFixed(2)

    return (
    <Wrapper>
        <h1>Checkout</h1>
        <p>Home &gt; checkout</p>
        <div className="wrapper">
            <div className="grid">
                <div className="subgrid">
                    { productsList }
                </div>
                <div className="checkout-container">
                    <h3 className="total">
                        Total Price: <span>${totalPrice}</span>
                    </h3>
                    <div>
                        <Button type="button" $ghost $arrow>Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
    )
}

export default Checkout