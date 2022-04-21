import { addDecorator } from '@storybook/react'
import React from 'react'

addDecorator((storyFn) => <>{storyFn()}</>)
