import { css } from '@emotion/react'
import * as React from 'react'

const baseStyle = css`
  font-size: 10rem;
`

export type TestSampleProps = {
  content: string
}

export const TestSample: React.VFC<TestSampleProps> = ({ content }) => {
  return (
    <>
      <h1 css={[baseStyle]} aria-label={content}>
        {content}
      </h1>
    </>
  )
}
