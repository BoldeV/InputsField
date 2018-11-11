import { shallow } from 'enzyme'
import InputField from '../src/components/InputField'

describe("<InputField /> check function changing", () => {

    it("chaning is work", () => {

        const _change = jest.fn()

        shallow(<InputField onChange={_change}/>)
            .find('input.inputs-div__input')
            .simulate('change')
        
        expect(_change).toBeCalled()

    })

})