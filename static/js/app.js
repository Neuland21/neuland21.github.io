import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import ComingSoon from './components/ComingSoonLanding'
import counter from './reducers'

require('../stylesheets/app.scss');

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <ComingSoon />,
  rootEl
)

render()
store.subscribe(render)