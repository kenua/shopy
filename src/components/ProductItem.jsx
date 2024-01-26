function ProductItem({ product, updateProduct }) {

    const handleChange = (e) => {
        updateProduct(product.id, +e.target.value)
    }

    let buttonText = (product.quantity > 0) ? 'Remove' : 'Add To Cart';
    let quantityToBeAdded = (product.quantity > 0) ? 0 : 1;

    return (
    <article>
        <p>{product.description}</p>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <button onClick={() => updateProduct(product.id, product.quantity + 1)}>+</button>
        <button onClick={() => updateProduct(product.id, product.quantity - 1)}>-</button>
        <input type="number" value={product.quantity} onChange={handleChange}/>
        <button onClick={() => updateProduct(product.id, quantityToBeAdded)}>
            {buttonText}
        </button>
    </article>
    )
}

export default ProductItem