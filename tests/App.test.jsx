import { describe, test, expect, vi } from 'vitest'
import { render, screen, act, fireEvent, waitFor, findByText } from '@testing-library/react'
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom'
import { userEvent } from '@testing-library/user-event'

import App from '../src/App.jsx'

// Mock fetch
global.fetch = vi.fn()

describe('App component', () => {
    test('Header and Footer components render', async () => {
        fetch.mockResolvedValue({ json: () => Promise.resolve([]) })

        await act(async () => render(<App />, { wrapper: Router }))

        expect(screen.getByTestId('navbar')).toBeInTheDocument()
        expect(screen.getByTestId('footer')).toBeInTheDocument()
    })
    
})

describe('Home component', () => {
    test('Home renders', async () => {
        fetch.mockResolvedValue({ json: () => Promise.resolve([]) })

        await act(async () => render(<App />, { wrapper: Router }))
        
        const homeHeading = screen.getByRole('heading', {name: /shop to your heart's content/i})
    
        expect(homeHeading).toBeInTheDocument()
    })

    test('Four products render', async () => {
        // Create 4 fake products
        let fakeProducts = []

        for (let i = 0; i < 4; i++) {
            fakeProducts.push({ id: i })
        }

        fetch.mockResolvedValue({ json: () => Promise.resolve(fakeProducts) })

        await act(async () => render(<App />, { wrapper: Router }))
        
        let products = screen.findAllByRole('article')
    })
})

describe('Shop page', () => {
    test('Shop component and product items render', async () => {
        let fakeProducts = [{
            id: 1,
            title: `product 1`,
            price: 10.99,
            description: `This product sold 12.`,
            url: '...',
            quantity: 0,
        }]
    
        fetch.mockResolvedValue({ json: () => Promise.resolve(fakeProducts) })

        await act(async () => render(
            <MemoryRouter initialEntries={['/shop']}>
                <App />
            </MemoryRouter>
        ))

        expect(await screen.findByRole('article')).toBeInTheDocument()
        expect(screen.getByRole('heading', {name: 'product 1'})).toBeInTheDocument()
        expect(screen.getByText('$10.99')).toBeInTheDocument()
        expect(screen.getByText('This product sold 12.')).toBeInTheDocument()
        expect(screen.getByDisplayValue('0')).toBeInTheDocument()
    })

    test('Error mesage renders', async () => {
        fetch.mockResolvedValue({ 
            json: () => Promise.reject('Sorry, we\'re unable to display any products at the moment. Please refresh the page or try again later.') 
        })

        render(
            <MemoryRouter initialEntries={['/shop']}>
                <App />
            </MemoryRouter>
        )
        
        expect(await screen.findByText('Sorry, we\'re unable to display any products at the moment. Please refresh the page or try again later.'))
    })

    test('Product item buttons add or remove an item from cart', async () => {
        const user = userEvent.setup()
        let fakeProducts = [{
            id: 1,
            title: `product 1`,
            price: 10.99,
            description: `This product sold 12.`,
            url: '...',
            quantity: 0,
        }]
    
        fetch.mockResolvedValue({ json: () => Promise.resolve(fakeProducts) })

        render(
            <MemoryRouter initialEntries={['/shop']}>
                <App />
            </MemoryRouter>
        )
            
        let button = await screen.findByRole('button', {name: /add to cart/i})
        let plusButton = await screen.findByRole('button', {name:/\+/})
        let minusButton = await screen.findByRole('button', {name:/\-/})
        let quantityInput = await screen.findByRole('spinbutton')
        
        // Add a single item to cart
        await user.click(button)
        expect(button.textContent).toBe('Remove')
        expect(screen.getByDisplayValue('1')).toBeInTheDocument()
        expect(screen.getByTestId('cart-counter')).toHaveTextContent('1')

        // Remove an item using 'Remove' button
        await user.click(button)
        expect(screen.queryByTestId('cart-counter')).toBeNull()
        expect(screen.getByDisplayValue('0')).toBeInTheDocument()
        expect(button.textContent).toMatch(/add to cart/i)

        // Add multiple items using + button
        await user.click(plusButton)
        await user.click(plusButton)
        await user.click(plusButton)
        expect(screen.getByTestId('cart-counter')).toHaveTextContent('3')
        expect(screen.getByDisplayValue('3')).toBeInTheDocument()
        expect(button.textContent).toBe('Remove')

        // Remove multiple items using - button
        await user.click(minusButton)
        await user.click(minusButton)
        await user.click(minusButton)
        expect(screen.queryByTestId('cart-counter')).toBeNull()
        expect(screen.getByDisplayValue('0')).toBeInTheDocument()
        expect(button.textContent).toMatch(/add to cart/i)

        // Add multiple items using quantity input
        fireEvent.change(quantityInput, {target: {value: 5}})
        expect(quantityInput.value).toBe('5')
        expect(screen.getByTestId('cart-counter')).toHaveTextContent('5')
        expect(button.textContent).toBe('Remove')

        // Remove multiple items using quantity inpute
        fireEvent.change(quantityInput, {target: {value: 2}})
        expect(quantityInput.value).toBe('2')
        expect(screen.getByTestId('cart-counter')).toHaveTextContent('2')

        // Remove all items using 'Remove' button
        await user.click(button)
        expect(screen.queryByTestId('cart-counter')).toBeNull()
        expect(screen.getByDisplayValue('0')).toBeInTheDocument()
        expect(button.textContent).toMatch(/add to cart/i)
    })
})

describe('Checkout page', () => {
    test('Cart icon renders checkout page', async () => {
        const user = userEvent.setup()
    
        render(<App />, { wrapper: Router })
    
        const cartIcon = screen.getByRole('button', {name: 'cart'})
    
        await user.click(cartIcon)
    
        expect(screen.getByRole('heading', {name: /^checkout$/i}))
    })

    test('\'Checkout\' button renders checkout page', async () => {
        const user = userEvent.setup()
    
        render(<App />, { wrapper: Router })
    
        const checkoutButton = screen.getByRole('button', {name: 'checkout'})
    
        await user.click(checkoutButton)
    
        expect(screen.getByRole('heading', {name: /^checkout$/i}))
    })
})