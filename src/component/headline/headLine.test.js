import React from 'react';
import {shallow} from 'enzyme'
import HeadLine from "./HeadLine";
import '../../setupTest'

import {findByTestAtrr} from "../../../Utils";

const setUp = (props={})=>{
    const component = shallow(<HeadLine {...props}/>)
    return component;
}

describe('Headline Component', () => {
    describe('Have props', ()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
                header: 'test header',
                desc: 'test desc'
            };
            wrapper = setUp(props)
        })

        it('Should render without errors',()=>{
            const component = findByTestAtrr(wrapper,'HeadlineComponent')
            expect(component.length).toBe(1)
        })

        it('Should render a H1',()=>{
            const h1 = findByTestAtrr(wrapper,'header')
            expect(h1.length).toBe(1)
        })
        it('Should render a description',()=>{
            const desc = findByTestAtrr(wrapper,'desc')
            expect(desc.length).toBe(1)
        })
    })
    describe('Dont have props', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp()
        })
        it('Should not render',()=>{
            const component = findByTestAtrr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(0)
        })
    })
});