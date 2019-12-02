import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttr, testStore} from '../../../../Utilities/utilsForTests' 
import AddImage from './index';
import "../../../../../setupTests";

const setUp = (initialState = {}) => {
	const store = testStore(initialState);
	const component = shallow(<AddImage  store={store}/>).childAt(0).dive();
	return component;
};

describe('AddImage Component', () => {
	let component;
	beforeEach(() => {
		const initialState = {
			image:'',
			loading:false
		}
		component = setUp(initialState);
	});

	describe('Nested', () => {
		it('Sould render with no errors', () => {
			const wrapper = findByTestAttr(component,'addImageComponent');
			expect(wrapper.length).toBe(1);

		})
	})

} )