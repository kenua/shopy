import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Checkout from './pages/Checkout.jsx'

function App() {

	return (
	<>
    	<Navbar />

		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/shop" element={<Shop />} />
			<Route path="/checkout" element={<Checkout />} />
		</Routes>

		<Footer />
    </>
	)
}

export default App
