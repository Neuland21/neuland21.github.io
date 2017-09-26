import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Template from './components/ComponentTemplate'
import counter from './reducers'

require('../stylesheets/app.scss');

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Template />,
  rootEl
)

render()
store.subscribe(render)