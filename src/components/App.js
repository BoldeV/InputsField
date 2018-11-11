import { Component } from 'react'
import DivInputs from './DivInputs'
import '../../stylesheets/App.scss'

export default class App extends Component {

    checkLength(e,min,max) {
        let value = e.target.value.length
        let classList = e.target.classList
        if (value < min || value > max) {
            (classList.contains("correct")) ? 
                classList.remove("correct") : null
            classList.add("error")
        } else {
            (classList.contains("error")) ? 
                classList.remove("error") : null
            classList.add("correct")
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