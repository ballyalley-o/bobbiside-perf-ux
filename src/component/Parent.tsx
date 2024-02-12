import React from 'react'
import { ChildFC } from './Child'

const Parent = () => {
  return (
    <ChildFC
      color=''
      onClick={() => {
        console.log('CLICK ME')
      }}
    >
      <div>'Hello'</div>
    </ChildFC>
  )
}

export default Parent
