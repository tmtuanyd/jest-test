import checkPropTypes from 'check-prop-types'
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './../src/reducer'
import {middlewares} from "./../src/createStore";

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
    return propsErr
}

export const testStore = (initialState) => {
    const createStoreWidthMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWidthMiddleware(rootReducer, initialState)
}