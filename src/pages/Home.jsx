import { useEffect } from 'react'
import ProductItem from '../components/ProductItem'
import useProductFetcher from '../hooks/useProductFetcher'

function Home({ products, setProducts, updateProduct }) {
    let [data, loading, error] = useProductFetcher(4)

    useEffect(() => {
        if (data) {
            setProducts(data)
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
        <h1>Shop to your heart's content</h1>
        <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
        { content }
    </>
    )
}

export default Home