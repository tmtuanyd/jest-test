import React from 'react';
import {shallow} from 'enzyme'
import Header from "./Header";
import '../../setupTest'
import {findByTestAtrr} from "../../../Utils";

const setUp =(props={})=>{
    const component = shallow(<Header {...props}/>)
    return component
}


describe('Header Component',()=>{

    let component;
    beforeEach(()=>{ //run before single test
        component = setUp()
    })

    it('It should render without errors', ()=>{
        const wrapper = findByTestAtrr(component, 'headerComponent')
        expect(wrapper.length).toBe(1)
    })

    it('Should render a logo', () => {
        const logo = findByTestAtrr(component, 'logoImg')
        expect(logo.length).toBe(1)
    })
})
// it('It should render without errors', ()=>{
//     expect(1).toBe(1)
// })