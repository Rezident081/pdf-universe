import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TextEditor } from '@/components/TextEditor.tsx'

describe('TextEditor', () => {
  const mockOnConvert = vi.fn()

  it('renders form elements', () => {
    render(<TextEditor onConvert={mockOnConvert} isLoading={false} />)
    expect(screen.getByPlaceholderText('Введите текст для конвертации...')).toBeDefined()
    expect(screen.getByText('Конвертировать в PDF')).toBeDefined()
  })

  it('handles text input', async () => {
    const user = userEvent.setup()
    render(<TextEditor onConvert={mockOnConvert} isLoading={false} />)

    const textarea = screen.getByPlaceholderText('Введите текст для конвертации...')
    await user.type(textarea, 'test')
    expect(textarea).toHaveValue('test')
  })

  it('disables form when loading', () => {
    render(<TextEditor onConvert={mockOnConvert} isLoading={true} />)

    expect(screen.getByPlaceholderText('Введите текст для конвертации...')).toBeDisabled()
    expect(screen.getByText('Конвертация...')).toBeDisabled()
  })

  it('prevents submission with empty text', async () => {
    const user = userEvent.setup()
    render(<TextEditor onConvert={mockOnConvert} isLoading={false} />)

    await user.click(screen.getByText('Конвертировать в PDF'))
    expect(mockOnConvert).not.toHaveBeenCalled()
  })
})