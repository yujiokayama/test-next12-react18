import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'

import { TestSample } from './index'

export default {
  title: 'Example/TestSample',
  component: TestSample,
} as ComponentMeta<typeof TestSample>

const Template: ComponentStory<typeof TestSample> = (args) => (
  <TestSample {...args} />
)

export const Default = Template.bind({})
Default.args = {
  content: 'Default Title',
}
