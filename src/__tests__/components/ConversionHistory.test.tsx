import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ConversionHistory } from '@/components/ConversionHistory.tsx'

describe('ConversionHistory', () => {
  const mockHistory = [
    { text: 'test1', timestamp: 1000 },
    { text: 'test2', timestamp: 2000 }
  ]
  const mockOnSelectItem = vi.fn()
  const mockOnClear = vi.fn()

  it('renders nothing when history is empty', () => {
    const { container } = render(
      <ConversionHistory
        history={[]}
        onSelectItem={mockOnSelectItem}
        onClear={mockOnClear}
        isLoading={false}
      />
    )
    expect(container.firstChild).toBeNull()
  })

  it('renders history items', () => {
    render(
      <ConversionHistory
        history={mockHistory}
        onSelectItem={mockOnSelectItem}
        onClear={mockOnClear}
        isLoading={false}
      />
    )
    expect(screen.getByText('Документ 1')).toBeDefined()
    expect(screen.getByText('test1')).toBeDefined()
  })

  it('handles item click when not loading', async () => {
    const user = userEvent.setup()
    render(
      <ConversionHistory
        history={mockHistory}
        onSelectItem={mockOnSelectItem}
        onClear={mockOnClear}
        isLoading={false}
      />
    )

    await user.click(screen.getByText('test1'))
    expect(mockOnSelectItem).toHaveBeenCalledWith('test1')
  })

  it('handles clear button click', async () => {
    const user = userEvent.setup()
    render(
      <ConversionHistory
        history={mockHistory}
        onSelectItem={mockOnSelectItem}
        onClear={mockOnClear}
        isLoading={false}
      />
    )

    await user.click(screen.getByText('Очистить'))
    expect(mockOnClear).toHaveBeenCalled()
  })
})