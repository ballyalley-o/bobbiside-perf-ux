import { FC, useState } from 'react'

const GuestList: FC = () => {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState<string[]>([])

  const handleGuest = () => {
    setName('')
    setGuests([...guests, name])
  }
  return (
    <div>
      <h2> Guest List </h2>
      <ul>
        {guests.map((guest, index) => (
          <li key={index}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleGuest}> Add Guest </button>
    </div>
  )
}

export default GuestList
