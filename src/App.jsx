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

	return (
	<>
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
