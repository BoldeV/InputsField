import { Component } from 'react'
import InputField from './InputField'

const DivInputs = ({ InputsLength=[] }) =>
    <div className="inputs-div">
        {InputsLength.map( ( input, i) => 
            <InputField key={i} />
        )}
    </div>

export default DivInputs