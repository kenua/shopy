import ProductItem from '../components/ProductItem.jsx'

function Checkout({ products, updateProduct }) {
    let productsList = products
        .filter(productObj => productObj.quantity > 0)
        .map(productObj => <ProductItem key={productObj.id} product={productObj} updateProduct={updateProduct}/>)
    let totalPrice = products
        .reduce((acc, cur) => (cur.price * cur.quantity) + acc, 0)
        .toFixed(2)
        
    return (
    <>
        <h1>Checkout</h1>
        <p>Home &gt; checkout</p>
        { productsList }
        <h3>Total Price: ${totalPrice}</h3>
    </>
    )
}

export default Checkout