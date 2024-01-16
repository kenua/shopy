import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { userEvent } from '@testing-library/user-event'

import App from '../src/App.jsx'

describe('App component', () => {
    test('Header and Footer components render', () => {
        render(<App />, {wrapper: Router})

        expect(screen.getByTestId('navbar')).toBeInTheDocument()
        expect(screen.getByTestId('footer')).toBeInTheDocument()
    })
    
    test('Home page renders', () => {
        render(<App />, { wrapper: Router })
        
        const homeHeading = screen.getByRole('heading', {name: /shop to your heart's content/i})
    
        expect(homeHeading).toBeInTheDocument()
    })
    
    test('Shop link renders shop page', async () => {
        const user = userEvent.setup()
    
        render(<App />, { wrapper: Router })
    
        const shopLink = screen.getByText(/^shop$/i)
    
        await user.click(shopLink)
    
        expect(screen.getByRole('heading', {name: /^shop$/i}))
    })

    test('Cart icon renders checkout page', async () => {
        const user = userEvent.setup()
    
        render(<App />, { wrapper: Router })
    
        const cartIcon = screen.getByRole('button', {name: 'cart'})
    
        await user.click(cartIcon)
    
        expect(screen.getByRole('heading', {name: /^checkout$/i}))
    })

    test('checkout button renders checkout page', async () => {
        const user = userEvent.setup()
    
        render(<App />, { wrapper: Router })
    
        const checkoutButton = screen.getByRole('button', {name: 'checkout'})
    
        await user.click(checkoutButton)
    
        expect(screen.getByRole('heading', {name: /^checkout$/i}))
    })
})
