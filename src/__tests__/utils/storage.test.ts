import { describe, it, expect, beforeEach } from 'vitest'
import { StorageService } from '@/utils/storage'

describe('StorageService', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('saves history to localStorage', () => {
    const mockHistory = [{ text: 'test', timestamp: 123 }]
    StorageService.saveHistory(mockHistory)
    expect(localStorage.getItem('pdfHistory')).toBe(JSON.stringify(mockHistory))
  })

  it('gets history from localStorage', () => {
    const mockHistory = [{ text: 'test', timestamp: 123 }]
    localStorage.setItem('pdfHistory', JSON.stringify(mockHistory))
    expect(StorageService.getHistory()).toEqual(mockHistory)
  })

  it('returns empty array when no history exists', () => {
    expect(StorageService.getHistory()).toEqual([])
  })

  it('clears history from localStorage', () => {
    localStorage.setItem('pdfHistory', 'test')
    StorageService.clearHistory()
    expect(localStorage.getItem('pdfHistory')).toBeNull()
  })
})