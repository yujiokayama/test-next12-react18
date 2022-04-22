import { render } from '@testing-library/react'

import { TestSample } from '@/components/TestSample'

describe('Sampleコンポーネント', () => {
  test('should first', () => {
    const { getByText } = render(<TestSample content="" />)
    expect(getByText('')).toBeTruthy()
  })
})
