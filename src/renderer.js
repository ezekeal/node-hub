import React from 'react'
import { render } from 'react-dom'
import '../assets/styles.css'
import App from './App'

const root = document.createElement('div')
document.body.appendChild(root)

render(
  <App />,
  root
)
