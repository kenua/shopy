import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/index.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Checkout from './pages/Checkout/index'

import './fonts.css'
import NormalizeStyle from '../normalize-styles.js'
import ResetStyle from '../reset-styles.js'
import ModuleStyle from '../modules-styles.js'

function App() {
	let [products, setProducts] = useState([])

	const updateProduct = (id, quantity) => {
		let newProducts = products.map(product => {
			if (product.id === id && quantity >= 0) {
				return {
					...product,
					quantity: Math.round(quantity)
				}
			} else {
				return {...product}
			}
		})
		setProducts(newProducts)
	}

	useEffect(() => {
		let productsCache = JSON.parse(localStorage.getItem('products'))

		if (productsCache) {
			setProducts(productsCache)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('products', JSON.stringify(products))
	}, [products])

	return (
	<>
		<NormalizeStyle />
		<ResetStyle />
		<ModuleStyle />

    	<Navbar products={products} />

		<Routes>
			<Route path="/" element={<Home products={products} setProducts={setProducts} updateProduct={updateProduct} />} />
			<Route 
				path="/shop" 
				element={<Shop products={products} 
				setProducts={setProducts} 
				updateProduct={updateProduct} />} 
			/>
			<Route path="/checkout" element={<Checkout products={products} updateProduct={updateProduct} />} />
		</Routes>

		<Footer />
    </>
	)
}

export default App
