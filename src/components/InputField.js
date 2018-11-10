import PropTypes from 'prop-types'
import '../../stylesheets/style.scss'

const InputField = ({onChange=f=>f}) =>
    <input onChange={onChange}/>

InputField.propTypes = {
    onChange: PropTypes.func
}

export default InputField