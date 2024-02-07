import { useEffect } from 'react'
import ProductItem from '../components/ProductItem'
import HomeHero from '../components/HomeHero/index'
import useProductFetcher from '../hooks/useProductFetcher'

function Home({ products, setProducts, updateProduct }) {
    let [data, loading, error] = useProductFetcher(4, products.length)

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

    let content

    if (error) {
        content = <p>{error}</p>
    } else if (loading) {
        content = <p>Loading...</p>
    } else {
        content = products
            .slice(0, 4)
            .map(productObj => (
                <ProductItem key={productObj.id} product={productObj} updateProduct={updateProduct}/>
        ))
    }

    return (
    <>
        <HomeHero />
        { content }
    </>
    )
}

export default Home