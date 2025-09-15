import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TariffWizard from '../app/TariffWizard.vue'
import { getTariffs } from '../util/api'

// Mock the API
vi.mock('../util/api', () => ({
  getTariffs: vi.fn()
}))

const mockGetTariffs = vi.mocked(getTariffs)

describe('TariffWizard', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockGetTariffs.mockResolvedValue([
      {
        id: 'electricity-classic-1',
        type: 'electricity',
        flexibility: 'classic',
        name: 'Wirklich ELECTRICITY Classic 1',
        pricePerUnit: 0.25,
        pricePerMonth: 10
      },
      {
        id: 'gas-comfort-1',
        type: 'gas',
        flexibility: 'comfort',
        name: 'Wirklich GAS Comfort 1',
        pricePerUnit: 0.26,
        pricePerMonth: 11
      }
    ])
  })

  it('should render the wizard component', () => {
    const wrapper = mount(TariffWizard)
    expect(wrapper.find('h2').text()).toBe('Tarif-Wizard')
  })
})
