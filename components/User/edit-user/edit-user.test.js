import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttr, testStore} from '../../../../Utilities/utilsForTests' 
import EditUser from './index';
import "../../../../../setupTests";

const setUp = (initialState = {}) => {
	const store = testStore(initialState);
	const component = shallow(<EditUser  store={store}/>).childAt(0).dive();
	return component;
};

describe('Edit user component', () => {
	let component;
	beforeEach(() => {
		const initialState = {
			user :[
				{
					title: 'exemple title 1',
					body: 'dddd string'
				},
				{
					title: 'exemple title 2',
					body: 'dddd string'
				},
				{
					title: 'exemple title 3',
					body: 'dddd string'
				},]
		}
		component = setUp(initialState);
	});

	describe('Nested', () => {
		it('Sould render with no errors', () => {
			console.log(component);
			const wrapper = findByTestAttr(component,'editUserComponent');
			expect(wrapper.length).toBe(1);

		})
	})

})