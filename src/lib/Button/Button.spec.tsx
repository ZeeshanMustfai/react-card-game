import { render } from '@testing-library/react'

import { Button } from './Button'

describe('Button', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<Button />)

    expect(baseElement).toBeTruthy()
  })
})
