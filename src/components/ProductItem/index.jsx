import { useState } from 'react'

import Wrapper from './Wrapper'
import Button from '../Button/index'

import questionMark from '/images/question-mark.svg'

function ProductItem({ product, updateProduct }) {
    let buttonText = (product.quantity > 0) ? 'Remove' : 'Add To Cart';
    let quantityToBeAdded = (product.quantity > 0) ? 0 : 1;

    return (
        <Wrapper>
            <ProductImage product={product} />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <QuantityControl product={product} updateProduct={updateProduct}/>
            <Button 
                onClick={() => updateProduct(product.id, quantityToBeAdded)} 
                $expand
            >
                {buttonText}
            </Button>
        </Wrapper>
    )
}

const ProductImage = ({ product }) => {
    let [showDesc, setShowDesc] = useState(false)

    let bgiStyle = { backgroundImage: `url(${product.url})` }

    const handleMouseEnter = () => setShowDesc(true)
    const handleMouseLeave = () => setShowDesc(false)

    return (
        <div className="image" style={bgiStyle}>
            <img 
                src={questionMark} 
                alt="More info" 
                className="question-mark" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
            />
            <p 
                className="description" 
                style={{ display: showDesc ? 'block' : 'none'}}
            >
                {product.description}
            </p>
        </div>
    )
}

const QuantityControl = ({ product, updateProduct }) => {
    const handleChange = e => updateProduct(product.id, +e.target.value)

    return (
        <div className="quantity-control">
            <button 
                onClick={() => updateProduct(product.id, product.quantity - 1)} 
                className="quantity-control__button"
            >
                -
            </button>
            <input 
                type="number" 
                value={product.quantity} 
                onChange={handleChange} 
                className="quantity-control__input"
            />
            <button 
                onClick={() => updateProduct(product.id, product.quantity + 1)} 
                className="quantity-control__button"
            >
                +
            </button>
        </div>
    )
}

export default ProductItem