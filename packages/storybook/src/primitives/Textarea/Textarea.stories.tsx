import * as React from 'react'
import { Textarea } from '@kodiak-ui/primitives'

export default { title: 'Forms/Textarea', component: Textarea }

export function initial() {
  return <Textarea placeholder="Type something..."></Textarea>
}
