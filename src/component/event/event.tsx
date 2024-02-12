import React from 'react'

const Event = () => {
  const handleEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {}

  return (
    <div>
      <input onChange={handleEvent} />
      <div draggable onDragStart={handleDragStart}>
        Drag Me
      </div>
    </div>
  )
}

export default Event
