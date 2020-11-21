import App from './App'
import {shallow} from 'enzyme'
import {findByTestAtrr, testStore} from '../Utils'
import React from 'react'
import './setupTest'
const setUp = (initialState={}) => {
    const store = testStore(initialState)
    const wrapper = shallow(<App store={store}/>).childAt(0).dive()
    console.log(wrapper.debug())
    return wrapper
}

describe('App Component', () => {
    let wrapper
    beforeEach(()=>{
        const initialState = {
            posts: [{
                title: 'Example title',
                body: 'Some text'
            },
                {
                    title: 'Example title',
                    body: 'Some text'
                },
                {
                    title: 'Example title',
                    body: 'Some text'
                },
            ]
        }
        wrapper = setUp(initialState)
    })

    it('Should render without error', ()=>{
        const component = findByTestAtrr(wrapper, 'appComponent');
        expect(component.length).toBe(1)
    })

    it('exampleMethod_updateState method should update state as expected',()=>{
        const classInsatance = wrapper.instance();
        classInsatance.exampleMethode_updateState();
        const newState = classInsatance.state.hideBtn;
        expect(newState).toBe(true);
    })

    it('Should return value as expected',()=>{
        const classInsatance = wrapper.instance();
        const newValue=classInsatance.exampleMethode_returnAValue(6);
        expect(newValue).toBe(7)
    })
})