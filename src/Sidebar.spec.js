import React from 'react';
import Sidebar from './Sidebar';
import {populateFormData, validateFields } from './registration-utils';
import {  
    MemoryRouter,
} from 'react-router';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('render', ()=> {
    let wrapper0;
    let wrapper1;
    let wrapper;
    let props;

    beforeEach(()=>{
        props = {
            className: 'test',
            open: false
        }
        wrapper0 = mount(
            <MemoryRouter>
                <Sidebar {...props}/>
            </MemoryRouter>
        );
        // wrapper = shallow(<Sidebar {...props}/>);
    });

    it('should render without crashing',()=>{
        expect(wrapper).toMatchSnapshot();
    });

    // it('should have open class if open prop is true', ()=> {
    //     const props = {
    //         open: true
    //     }
    //     wrapper = shallow(<Sidebar {...props}/>);
    //     expect(wrapper.find('.open')).toHaveLength(1);
    // });

});