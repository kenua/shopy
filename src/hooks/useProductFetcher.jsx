import { useState, useEffect } from 'react' 

function useProductFetcher(quantity = null) {
    let [data, setData] = useState(null)
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async (q) => {
            try {
                let url = 'https://fakestoreapi.com/products'
        
                if (typeof q === 'number' && q > 0) {
                    url = `https://fakestoreapi.com/products?limit=${q}`
                }
        
                let res = await fetch(url)
                let data = await res.json()
                let productsData = data.map(product => ({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    url: product.image,
                    quantity: 0,
                }))
    
                setLoading(false)
                setData(productsData)
            } catch (e) {
                setError('Sorry, we\'re unable to display any products at the moment. Please refresh the page or try again later.')
            }
        }
        fetchProducts(quantity)
    }, [])

    return [data, loading, error]
}

export default useProductFetcher