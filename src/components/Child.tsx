import React from 'react'

interface IChild {
  color: string
}

const Child = ({ color }: IChild) => {
  return <div>{color}</div>
}

const ChildFC: React.FC<IChild> = ({ color }) => {
  return <div className=''>{color}</div>
}

export { Child }
