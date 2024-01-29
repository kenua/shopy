import { useEffect } from 'react'
import ProductItem from '../components/ProductItem'
import useProductFetcher from '../hooks/useProductFetcher.jsx'

function Shop({ products, setProducts, updateProduct }) {
    let [data, loading, error] = useProductFetcher()

    useEffect(() => {
        if (data) {
            setProducts(data)
        }
    }, [data])

    let content;

    if (error) {
        content = <p>{error}</p>
    } else if (loading) {
        content = <p>Loading...</p>
    } else {
        content = products.map(productObj => (
            <ProductItem key={productObj.id} product={productObj} updateProduct={updateProduct}/>
        ))
    }

    return (
    <>
        <h1>Shop</h1>
        <p>Home &gt; shop</p>
        { content }
    </>
    )
}

export default Shop