import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Checkout from './pages/Checkout.jsx'

function App() {
	let [products, setProducts] = useState([])

	const updateProduct = (id, quantity) => {
		let newProducts = products.map(product => {
			if (product.id === id) {
				return {
					...product,
					quantity
				}
			} else {
				return {...product}
			}
		})
		setProducts(newProducts)
	}

	const fetchProducts = async (quantity = null) => {
		try {
			let url = 'https://fakestoreapi.com/products'
	
			if (typeof quantity === 'number' && quantity > 0) {
				url = `https://fakestoreapi.com/products?limit=${quantity}`
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

			return productsData

		} catch (e) {
			throw new Error('Something wrong happened while fetching :(')
		}
	}

	return (
	<>
    	<Navbar products={products} />

		<Routes>
			<Route path="/" element={<Home products={products} setProducts={setProducts} fetchProducts={fetchProducts} />} />
			<Route 
				path="/shop" 
				element={<Shop products={products} 
				setProducts={setProducts} 
				updateProduct={updateProduct} 
				fetchProducts={fetchProducts}/>} 
			/>
			<Route path="/checkout" element={<Checkout />} />
		</Routes>

		<Footer />
    </>
	)
}

export default App
