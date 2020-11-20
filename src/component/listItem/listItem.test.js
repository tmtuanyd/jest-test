import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAtrr, checkProps} from '../../../Utils'
import ListItem from "./ListItem";
import '../../setupTest'

describe('ListItem Component', () => {
    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some text'
            };
            const propsError = checkProps(ListItem, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })
    describe('Component Renders', () => {
        let wrapper;
        beforeEach(()=>{
            const props = {
                title: 'Example Title',
                desc: 'Some text'
            }
            wrapper = shallow(<ListItem {...props} />)
        })
        it('Should render without error',()=>{
            const component = findByTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toEqual(1)
        })
        it('Should render title', () => {
            const title = findByTestAtrr(wrapper, 'componentTitle');
            expect(title.length).toEqual(1)
        })
        it('Should render description', () => {
            const desc = findByTestAtrr(wrapper, 'componentDesc');
            expect(desc.length).toEqual(1)
        })
    })

    describe('Should not render',()=>{
        let wrapper
        beforeEach(()=>{
            const props = {
                desc: 'Example Title',
            }
            wrapper = shallow(<ListItem {...props} />)
        })
        it('Component is not render', ()=>{
            const component = findByTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toEqual(0)
        })
    })
})