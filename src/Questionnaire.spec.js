import React from 'react';
import {  
    MemoryRouter,
} from 'react-router';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { submitData, getData } from './registration-utils';
import { AppContext } from './App'
import Questionnaire from './Questionnaire';
import { act } from 'react-dom/test-utils';

jest.mock('./registration-utils', () => ({
    submitData: jest.fn().mockImplementation(
        () => Promise.resolve(
            {
                ok: true, 
                json: jest.fn().mockResolvedValue(true)
            }
        )
    ),
    getData: jest.fn().mockImplementation(
        () => Promise.resolve(
            {
                ok: true, 
                json: jest.fn().mockResolvedValue(true)
            }
        )
    )
}))

configure({ adapter: new Adapter() });

describe('render', ()=> {
    let wrapper0;
    let wrapper;

    // const setState = jest.fn();
    // const useStateSpy = jest.spyOn(registrationUtils, 'submitData')
    // useStateSpy.mockImplementation((init) => {ok: true} );
    const props = {
        history: {
            push: jest.fn()
        }
    }


    beforeEach(()=>{
        wrapper0 = mount(
            <AppContext.Provider value={[{}, ()=>{}]}>
                <MemoryRouter>
                    <Questionnaire {...props}/>
                </MemoryRouter>
            </AppContext.Provider>
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render without crashing', async ()=>{
        await act(async () => {
            await expect(wrapper).toMatchSnapshot();
        });
    });

    it('should set saved to true if draft button clicked', async ()=> {  
        await act(async () => {
            await wrapper0.find('.btn-draft').at(0).simulate('click', {target: { value: 'Foo' } })
            expect(wrapper0.update().find('.btn-draft').at(0).props().st).toBe("true");
        });
    });

    it('should prompt user when submit is clicked', async () => {
        await act(async () => {
            await wrapper0.find('.btn-submit').at(0).simulate('click');
            expect(wrapper0.update().find('.prompt.open').at(0)).toHaveLength(1);
        });
    });

    it('should close prompt when cancel is clicked', async () => {
        await act(async () => {
            await wrapper0.find('.btn-submit').at(0).simulate('click');
            await wrapper0.find('.btn-confirm').at(0).simulate('click');
            expect(wrapper0.update().find('.btn-submit.done').at(0)).toHaveLength(1);
        });
    });

    it('should save when confirm is clicked', async () => {
        await act(async () => {
            await wrapper0.find('.btn-submit').at(0).simulate('click');
            await wrapper0.find('.btn-confirm').at(0).simulate('click');
            expect(wrapper0.update().find('.prompt.open').at(0)).toHaveLength(0);
        });
    });

    it('should load answers if user has submission', async () => {
        await act(async () => {
            
        });
    });

});