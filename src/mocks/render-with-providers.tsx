import React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {render} from '@testing-library/react'

const queryClient = new QueryClient()

// queryClient.clear()

export const renderWithProviders = (ui: React.ReactNode) =>
  render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>)