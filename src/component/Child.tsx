import React, { FC, ReactNode } from 'react'

interface IChild {
  color: string
  children: ReactNode
  onClick: () => void
}

const Child = ({ color, onClick }: IChild) => {
  return (
    <div>
      {color}
      <button onClick={onClick}></button>
    </div>
  )
}

const ChildFC: React.FC<IChild> = ({ color, onClick, children }) => {
  return (
    <div className=''>
      {children}
      {color} <button onClick={onClick}></button>
    </div>
  )
}

export { Child, ChildFC }
