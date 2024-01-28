import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Checkout from '../src/pages/Checkout.jsx'

describe('Cart has items', () => {
    let fakeProducts = []

    for (let i = 0; i < 10; i++) {
        fakeProducts.push(
            {
                id: i,
                title: `product ${i + 1}`,
                price: 10.99,
                description: `This product sold 12 items.`,
                url: '...',
                quantity: 1,
            }
        )
    }

    test('Print products and total price', () => {

        render(<Checkout products={fakeProducts} updateProduct={vi.fn} />, { wrapper: Router })
    
        expect(screen.getAllByText(/product [0-9][0]?/i).length).toBe(10)
        expect(screen.getByRole('heading', {name: /total price\: \$109\.90/i}))
            .toBeInTheDocument()
    })
})

describe('Cart has no items', () => {
    let fakeProducts = []

    for (let i = 0; i < 10; i++) {
        fakeProducts.push(
            {
                id: i,
                title: `product ${i + 1}`,
                price: 10.99,
                description: `This product sold 12 items.`,
                url: '...',
                quantity: 0,
            }
        )
    }

    test('No product is printed and total shows zero dollars', () => {
        render(<Checkout products={fakeProducts} updateProduct={vi.fn} />, { wrapper: Router })

        expect(screen.queryAllByText(/product [0-9][0]?/i).length).toBe(0)
        expect(
            screen.getByRole('heading', {name: /total price\: \$0/i})
        ).toBeInTheDocument()

    })
})