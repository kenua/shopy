import { describe, test, expect, vi, beforeEach } from 'vitest'
import { render, screen, act, fireEvent, waitFor, findByText } from '@testing-library/react'
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom'
import { userEvent } from '@testing-library/user-event'

import App from '../src/App.jsx'

// Mock fetch
global.fetch = vi.fn()

beforeEach(() => {
    localStorage.clear()
})

describe.skip('App component', () => {
    test('Header and Footer components render', async () => {
        fetch.mockResolvedValue({ json: () => Promise.resolve([]) })

        await act(async () => render(<App />, { wrapper: Router }))

        expect(screen.getByTestId('navbar')).toBeInTheDocument()
        expect(screen.getByTestId('footer')).toBeInTheDocument()
    })
    
})

describe('Home component', () => {
    test('Home renders', async () => {
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
                price: 10.99,
                description: `This product sold 12.`,
                url: '...',
                quantity: 0,
            },
            {
                id: 3,
                title: `product 3`,
                price: 10.99,
                description: `This product sold 12.`,
                url: '...',
                quantity: 0,
            },
            {
                id: 4,
                title: `product 4`,
                price: 10.99,
                description: `This product sold 12.`,
                url: '...',
                quantity: 0,
            },
        ]

        fetch.mockResolvedValue({ json: () => Promise.resolve(fakeProducts) })

        await act(async () => render(<App />, { wrapper: Router }))
        
        const heading = screen.getByRole('heading', {name: /^shop$/i})
        const subheading = screen.getByRole('heading', {name: /to your heart’s content/i})
    
        expect(heading).toBeInTheDocument()
        expect(subheading).toBeInTheDocument()
        expect(screen.getAllByRole('article').length).toBe(4)
        expect(screen.getByRole('heading', {name: 'product 1'})).toBeInTheDocument()
        expect(screen.getAllByText('$10.99')[0]).toBeInTheDocument()
        expect(screen.getAllByText('This product sold 12.')[0]).toBeInTheDocument()
        expect(screen.getAllByDisplayValue('0')[0]).toBeInTheDocument()
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

        // quantity can't get below 0 or decimals
        await user.click(minusButton)
        fireEvent.change(quantityInput, {target: {value: -1}})
        expect(quantityInput.value).not.toBe('-1')
        fireEvent.change(quantityInput, {target: {value: 1.5}})
        expect(quantityInput.value).toBe('2')
    })
})

describe('Checkout page', () => {
    test('Cart icon renders checkout page', async () => {
        const user = userEvent.setup()
    
        render(<App />, { wrapper: Router })
    
        // const cartIcon = screen.getByRole('button', {name: 'cart'})
        const cartIcon = screen.getByAltText(/Cart/)
    
        await user.click(cartIcon)
    
        expect(screen.getByRole('heading', {name: /^checkout$/i}))
    })

    test('\'Checkout\' button renders checkout page', async () => {
        const user = userEvent.setup()
    
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        )

        const checkoutButton = screen.getByText(/Checkout/)
    
        await user.click(checkoutButton)
    
        expect(screen.getByRole('heading', {name: /^checkout$/i}))
    })
})

describe('LocalStorage', async () => {
    test('App preserves fetched products', async () => {
        const user = userEvent.setup()
        let fakeProducts = []

        // make 10 fake products
        for (let i = 0; i < 10; i++) {
            fakeProducts.push({
                id: i,
                title: `product ${i + 1}`,
                price: 10.99,
                description: `This product sold ${i * 2}.`,
                url: '...',
                quantity: 0,
            })
        }

        fetch.mockResolvedValue({ json: () => Promise.resolve(fakeProducts.slice(0, 4)) })

        await act(async () => render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        ))

        fireEvent.change(
            screen.getAllByDisplayValue('0')[0], 
            {target: {value: 5}}
        )

        fetch.mockResolvedValue({ json: () => Promise.resolve(fakeProducts) })

        await user.click(screen.getByText(/^shop$/))

        expect(screen.getByDisplayValue('5').value).toBe('5')
    })
})