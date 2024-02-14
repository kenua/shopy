import { useEffect } from 'react'
import styled from 'styled-components'
import ProductItem from '../components/ProductItem/index'
import useProductFetcher from '../hooks/useProductFetcher'
import CurrentPage from '../components/CurrentPage'

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
        <CurrentPage page="Shop" />
        <div className="wrapper">
            <Grid>
                { content }
            </Grid>
        </div>
    </>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(284px, 284px));
    justify-content: center;
    column-gap: 14px;
    row-gap: 14px;
`

export default Shop