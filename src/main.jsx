import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Matches from './component/matches/matches.jsx'
import EV from './component/Evting/EV.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Matches /> */}
    <EV />
  </React.StrictMode>,
)
