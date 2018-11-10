import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import InputsLength from '../data/InputsLength'

window.React = React

render (
    <App InputsLength = {InputsLength['InputsLength']}/>,
    document.getElementById('react-app')
)