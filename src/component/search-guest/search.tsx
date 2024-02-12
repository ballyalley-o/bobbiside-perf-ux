import React, { useState } from 'react'
import { guest } from '../../mock'
import { IGuest } from '../../interface/component'

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const [guests, setGuests] = useState<IGuest | undefined>()

  const searchGuest = () => {
    const foundGuest = guest.find((i) => i.name === searchValue)
    if (foundGuest) {
      setGuests(foundGuest)
    } else {
      alert('Guest not found')
    }
  }

  return (
    <div>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={searchGuest}>Search Guest</button>
      <div>
        {guests && (
          <div>
            <h2>Guest Details</h2>
            <p>Name: {guests.name}</p>
            <p>Age: {guests.age}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
