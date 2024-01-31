import { useEffect } from 'react'
import ProductItem from '../components/ProductItem'
import useProductFetcher from '../hooks/useProductFetcher.jsx'

function Shop({ products, setProducts, updateProduct }) {
    let [data, loading, error] = useProductFetcher(20, products.length)

    useEffect(() => {
        if (data) {
            if (products.length > 0) {
                let productsToSave = []
                
                data.forEach(dataItem => {
                    let addItem = true

                    for (let i = 0; i < products.length; i++) {
                        if (products[i].id === dataItem.id) addItem = false
                    }

                    if (addItem) productsToSave.push({...dataItem})
                })

                setProducts([...products, ...productsToSave])
            } else {
                setProducts(data)
            }
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