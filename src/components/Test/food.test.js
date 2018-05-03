import React from 'react'
import expect from 'expect'
import {shallow} from 'enzyme'
import {Food}  from '../Food/food'
import Adapter from 'enzyme-adapter-react-15';

describe('Component: Food', () => {

it('renders without exploding',() =>{

  expect(
    shallow(
      <Food/>
    ))
  
})





})