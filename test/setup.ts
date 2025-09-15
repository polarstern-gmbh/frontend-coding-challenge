import { vi } from 'vitest'
import { config } from '@vue/test-utils'

// Mock Nuxt composables
vi.mock('#imports', () => ({
  // Add any Nuxt-specific mocks here if needed
}))

// Global test configuration
config.global.mocks = {
  // Add global mocks here
}
