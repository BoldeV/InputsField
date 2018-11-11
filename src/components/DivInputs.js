import { Component } from 'react'
import PropTypes from 'prop-types'
import InputField from './InputField'
import '../../stylesheets/DivInputs.scss'

const DivInputs = ({ InputsLength=[], onChange=f=>f }) =>
    <div className="inputs-div">
        {InputsLength.map( ( input, i) => 
            <InputField key={i}
                        onChange={(e) => onChange(e, input.min, input.max)}
            />
        )}
    </div>

DivInputs.propTypes = {
    InputsLength: PropTypes.array,
    onChange: PropTypes.func
}

export default DivInputs