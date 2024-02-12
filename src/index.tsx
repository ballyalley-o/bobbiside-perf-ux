import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { GuestList } from './component/guest-list'
import { Search } from './component/search-guest'
import { GLOBAL } from './config'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el!)
const App = () => {
  useEffect(() => {
    document.title = GLOBAL.APP_TITLE
  }, [])

  return (
    <div>
      <Search />
    </div>
  )
}

root.render(<App />)
