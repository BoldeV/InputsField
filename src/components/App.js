import { Component } from 'react'
import DivInputs from './DivInputs'

export default class App extends Component {

    checkLength(e,min,max) {
        let value = e.target.value.length
        if (value < min || value > max) {
            console.log('error')
        } else {
            console.log('good')
        }
    }

    render() {
        const { checkLength } = this
        const { InputsLength } = this.props
        return (
            <form>
                <DivInputs InputsLength={ InputsLength }
                           onChange={checkLength}
                />
            </form>
        )
    }
}