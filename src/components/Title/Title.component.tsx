import * as React from 'react'

export type ExampleProps = {
  /**
   * Title content
   */
  content: string
}

export const Title: React.FC<ExampleProps> = ({ content }) => (
  <h1 aria-label={content}>{content}</h1>
)

Title.displayName = 'Title'
