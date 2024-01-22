import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Checkout from './pages/Checkout.jsx'

function App() {
	let [products, setProducts] = useState([])

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
    	<Navbar />

		<Routes>
			<Route path="/" element={<Home products={products} setProducts={setProducts} fetchProducts={fetchProducts} />} />
			<Route path="/shop" element={<Shop />} />
			<Route path="/checkout" element={<Checkout />} />
		</Routes>

		<Footer />
    </>
	)
}

export default App
