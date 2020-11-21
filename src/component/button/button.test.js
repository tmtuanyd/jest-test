import React from 'react'
import {findByTestAtrr, checkProps} from '../../../Utils'
import ShareButton from "./Button";
import {shallow} from 'enzyme'
import '../../setupTest'

describe('ShareButton Component',()=>{
    describe('Checking PropTypes', () => {
        it('Should Not throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            }
            const propsError = checkProps(ShareButton, expectedProps);
            expect(propsError).toBeUndefined();
        })
    })

    describe('Renders', () => {
        let wrapper
        let mockFn;
        beforeEach(()=>{
            mockFn = jest.fn();
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: mockFn
            }
            wrapper = shallow(<ShareButton {...props}/>)
        })
        it('Should render a button',()=>{
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            expect(button.length).toEqual(1)
        })

        it('should emit callback on click event',()=>{
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFn.mock.calls.length;
            expect(callback).toBe(1);
        })
    })
})