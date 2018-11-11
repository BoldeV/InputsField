import { render } from 'enzyme'
import App from '../src/components/App'

describe("<App /> Expecting 4 inputs", () => {
    let arr = [
        {
            min: 3,
            max: 15
        },
        {
            min: 2,
            max: 12
        },
        {
            min: 1,
            max: 13
        },
        {
            min: 5,
            max: 17
        }
    ]
    it("renders correctly", () =>

        expect(
            render(<App InputsLength={arr}/>)
                .find('form div input')
                .length
        ).toBe(4)
    )

})
