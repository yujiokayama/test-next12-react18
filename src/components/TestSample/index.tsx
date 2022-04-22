import * as React from 'react'

export type TestSampleProps = {
  content: string
}

export const TestSample: React.VFC<TestSampleProps> = ({ content }) => {
  return (
    <>
      <h1>{content}</h1>
    </>
  )
}
