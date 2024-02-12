import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { GLOBAL } from './config'
// @components
import { GuestList } from './component/guest-list'
import { Search } from './component/search-guest'
import { RefSearch } from './component/ref'
import { Event } from './component/event'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el!)
const App = () => {
  useEffect(() => {
    document.title = GLOBAL.APP_TITLE
  }, [])

  return (
    <div>
      <RefSearch />
    </div>
  )
}

root.render(<App />)
