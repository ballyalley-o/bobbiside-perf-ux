import React, { FC, useState, useRef, useEffect } from 'react'

const RefSearch: FC = () => {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleGuest = () => {
    setName('')
    setGuests([...guests, name])
  }

  useEffect(() => {
    if (!inputRef.current) {
      return
    }
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <h2> Guest List </h2>
      <ul>
        {guests.map((guest, index) => (
          <li key={index}>{guest}</li>
        ))}
      </ul>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleGuest}> Add Guest </button>
    </div>
  )
}

export default RefSearch
