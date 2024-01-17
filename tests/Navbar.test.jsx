import { describe, test, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from '../src/components/Navbar'

describe('Navbar', () => {
    test('Navbar renders', () => {
        render(<Navbar />, {wrapper: Router})

        expect(screen.getByRole('heading', { name: /shopy/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /shop/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /cart/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /checkout/i })).toBeInTheDocument()
    })

    test('Render quantity of products in cart', () => {
        render(<Navbar quantity={5} />, {wrapper: Router})
    
        const quantityNode = screen.getByText('5')
    
        expect(quantityNode).toBeInTheDocument()
    })
    
    test('Don\'t render quantity of products when cart is empty', () => {
        render(<Navbar quantity={0} />, {wrapper: Router})
    
        const quantityNode = screen.getByText('0')
    
        expect(quantityNode).toBeInTheDocument()
    })
})