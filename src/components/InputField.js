import PropTypes from 'prop-types'
import '../../stylesheets/InputField.scss'

const InputField = ({onChange=f=>f}) =>
    <input onChange={onChange}
           type="text"
           className="inputs-div__input"/>

InputField.propTypes = {
    onChange: PropTypes.func
}

export default InputField