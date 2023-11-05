import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.css'
import App from './app'

const rootView = document.getElementById('root')

if (rootView) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootView
  )
}
