import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@/App.tsx'

vi.mock('@/services/api', () => ({
  PdfService: {
    convert: vi.fn()
  }
}))

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    render(<App />)
    expect(screen.getByText('Конвертер текста в PDF')).toBeDefined()
  })
})