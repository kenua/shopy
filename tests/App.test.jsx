import { describe, test, expect } from 'vitest'
import { render, screen, act, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
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
    test('Shop link renders shop page', async () => {
        const user = userEvent.setup()
    
        await act(async () => render(<App />, { wrapper: Router }))
    
        const shopLink = screen.getByText(/^shop$/i)
    
        await user.click(shopLink)
    
        expect(screen.getByRole('heading', {name: /^shop$/i}))
    })

    test('Products render', async () => {
        let fakeProducts = [
            {
                id: 1,
                title: `product 1`,
                price: 10.99,
                description: `This product sold 12.`,
                url: '...',
                quantity: 0,
            },
            {
                id: 2,
                title: `product 2`,
                price: 23.99,
                description: `This product sold 11.`,
                url: '...',
                quantity: 0,
            },
        ]
    
        fetch.mockResolvedValue({ json: () => Promise.resolve(fakeProducts) })

        await act(async () => render(<App />, { wrapper: Router }))

        let products = await screen.findAllByRole('article')

        expect(screen.getByRole('heading', {name: 'product 1'})).toBeInTheDocument()
        expect(screen.getByText('$10.99')).toBeInTheDocument()
        expect(screen.getByText('This product sold 12.')).toBeInTheDocument()
        expect(screen.getAllByDisplayValue('0')[0]).toBeInTheDocument()
    })

    test('\'Add To Cart\' button adds a single prodcut to cart', async () => {
        const user = userEvent.setup()

        await act(async () => render(<App />, { wrapper: Router }))

        let button = (await screen.findAllByRole('button', {name: /add to cart/i}))[0]

        await user.click(button)

        expect(screen.getByTestId('cart-counter')).toHaveTextContent('1')
        expect(screen.getByDisplayValue('1')).toBeInTheDocument()
        expect(button.textContent).toBe('Remove')
    })

    test('\'Remove From Cart\' button removes a product from cart', async () => {
        const user = userEvent.setup()

        await act(async () => render(<App />, { wrapper: Router }))

        let button = (await screen.findAllByRole('button', {name: /add to cart/i}))[0]

        await user.click(button) // add product
        await user.click(button) // remove product

        expect(screen.queryByTestId('cart-counter')).toBeNull()
        expect(screen.getAllByRole('button', {name: /add to cart/i}).length).toBe(2)
    })

    test('\'Remove From Cart\' button removes all items from cart', async () => {
        const user = userEvent.setup()

        await act(async () => render(<App />, { wrapper: Router }))

        let input = (await screen.findAllByRole('spinbutton'))[0]

        fireEvent.change(input, {target: {value: 5}})

        expect(input.value).toBe('5')
        expect(screen.queryByTestId('cart-counter').textContent).toBe('5')

        let button = await screen.findByRole('button', {name: /remove/i})

        await user.click(button)

        expect(input.value).toBe('0')
        expect(screen.queryByTestId('cart-counter')).toBeNull()
    })

    test('+ and - buttons increment & decrement product\'s quantity by 1', async () => {
        const user = userEvent.setup()

        await act(async () => render(<App />, { wrapper: Router }))

        let plusButton = (await screen.findAllByRole('button', {name:/\+/}))[0]
        let minusButton = (await screen.findAllByRole('button', {name:/\-/}))[0]

        await user.click(plusButton)
        await user.click(plusButton)

        expect(screen.queryByTestId('cart-counter').textContent).toBe('2')        

        await user.click(minusButton)
        await user.click(minusButton)

        expect(screen.queryByTestId('cart-counter')).toBeNull()
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