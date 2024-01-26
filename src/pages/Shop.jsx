import { useEffect } from 'react'
import ProductItem from '../components/ProductItem'

function Shop({ products, setProducts, updateProduct, fetchProducts }) {
    useEffect(() => {
        let fetchAllProducts = async () => {
            let fetchedProducts = await fetchProducts();

            setProducts(fetchedProducts)
        }

        fetchAllProducts()
    }, [])

    let productsList = products.map(productObj => (
        <ProductItem key={productObj.id} product={productObj} updateProduct={updateProduct}/>
    ))

    return (
    <>
        <h1>Shop</h1>
        <p>Home &gt; shop</p>
        { productsList }
    </>
    )
}

export default Shop