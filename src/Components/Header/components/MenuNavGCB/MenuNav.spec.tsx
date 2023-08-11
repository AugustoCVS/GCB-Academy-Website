import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MenuNav from './MenuNavGCB'

describe('MenuNav', () => {
  it('should render the component', () => {
    render(<MenuNav />)

    const navContainer = screen.getByRole('navigation')
    expect(navContainer).toBeInTheDocument()

    const listContainer = screen.getByRole('list')
    expect(listContainer).toBeInTheDocument()

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(3)
  })

  it('should apply proper styles to the links', () => {
    render(<MenuNav />)

    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveStyleRule('color: black')
      expect(link).toHaveStyleRule('text-decoration: none')
    })

    links.forEach((link) => {
      userEvent.hover(link)
      expect(link).toHaveStyleRule('color: gold')
      expect(link).toHaveStyleRule('border-bottom: 2px solid gold')
      userEvent.unhover(link)
      expect(link).toHaveStyleRule('color: black')
      expect(link).toHaveStyleRule('border-bottom: none')
    })
  })
})
