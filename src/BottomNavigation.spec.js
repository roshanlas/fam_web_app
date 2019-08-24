import React from 'react';
import BottomNavigation from './BottomNavigation';
import {  
    MemoryRouter,
} from 'react-router';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('render', ()=> {
    let wrapper0;
    let wrapper;

    beforeEach(()=>{
        // wrapper0 = mount(
        //     <MemoryRouter>
        //         <BottomNavigation/>
        //     </MemoryRouter>
        // );
        wrapper = shallow(<BottomNavigation/>);
    });

    it('should render without crashing',()=>{
        expect(wrapper).toMatchSnapshot();
    });

    it('should have open class if open prop is true', ()=> {
        // const btn = wrapper.find('.menu');
        // const sidebar = wrapper.find('.Sidebar');
        // btn.simulate('click');
        // expect(wrapper).toHaveProperty('value.open', true);
    });

});