import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

global.React = React
global.Enzyme = Enzyme

console.groupCollapsed = jest.fn()
console.log = jest.fn()
console.groupEnd = jest.fn()
