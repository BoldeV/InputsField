import { shallow } from 'enzyme'
import DivInputs from '../src/components/DivInputs'

describe("<DivInputs /> render", () => {

    it("renders correctly", () =>
        expect(
            shallow(<DivInputs />)
                .find('div.inputs-div')
                .length
        ).toBe(1)
    )

})