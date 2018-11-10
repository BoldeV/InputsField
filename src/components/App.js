import { Component } from 'react'
import DivInputs from './DivInputs'

export default class App extends Component {

    render() {
        const { InputsLength } = this.props
        return (
            <form>
                <DivInputs InputsLength={ InputsLength } />
            </form>
        )
    }
}