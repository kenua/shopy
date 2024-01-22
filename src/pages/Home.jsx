import { useEffect } from 'react'

function Home({ products, setProducts, fetchProducts }) {
    useEffect(() => {
        let fetchFourProducts = async () => {
            let fetchedProducts = await fetchProducts(4);

            setProducts(fetchedProducts)
        }

        fetchFourProducts()
    }, [])

    let productsList = products
        .slice(0, 4)
        .map(productObj => (
            <article key={productObj.id}></article>
    ))

    return (
    <>
        <h1>Shop to your heart's content</h1>
        <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
        { productsList }
    </>
    )
}

export default Home