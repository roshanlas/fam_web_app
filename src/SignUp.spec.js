import React from 'react';
import SignUp from './SignUp';
import {populateFormData, validateFields } from './registration-utils';
import {  
    MemoryRouter,
} from 'react-router';
import renderer from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('render', ()=> {
    let wrapper0;
    let wrapper1;
    let wrapper;

    beforeEach(()=>{
        wrapper0 = mount(
            <MemoryRouter>
                <SignUp/>
            </MemoryRouter>
        );
        wrapper = shallow(<SignUp/>);
    });
    it('should render without crashing',()=>{
        expect(wrapper).toMatchSnapshot();
    });

    describe('.populateFormData', ()=>{
        it('should return the expected object', () => {
            const mockFields = {
                email: {comp: { value: 'jim@email.com'}, label: 'Email'},
            }
            const result = populateFormData(mockFields);
            const expected = {
                    email: 'jim@email.com'
            }
            expect(result).toEqual(expected)
        });
    });

    describe('.submitData', () => {
        it('should submit the data', () => {

        })
    });

    describe('.validateFields', () => {
        let formData;
        beforeEach(()=>{
            formData = {
                email: '', 
                password: '', 
                repeatPassword: '', 
                firstName: '', 
                lastName: '',
                dob: '', 
                gender: '', 
                marriageStatus: '', 
                occupation: '', 
                residence: '', 
                city: '', 
                homeAddress: '', 
                postCode: ''
            }
        })
        it('should reject invalid email address', () => {
            formData = {
                ...formData,
                email: 'wrongaddress'
            }
            let errors = validateFields(formData);
            expect(errors.email).toBeDefined()
        });
        it('should reject mismatching passwords', () => {
            formData = {
                ...formData,
                password: 'wrongaddress',
                repeatPassword: 's'
            }
            let errors = validateFields(formData);
            expect(errors.password).toBeDefined()
        });
        it('should reject missing felds', () => {
            formData = {
                ...formData,
                password: '',
                repeatPassword: ''
            }
            let errors = validateFields(formData);
            expect(errors.password).toBeDefined()
        });
    })

    describe('.sign-up-button', ()=>{
        // let signUpBtn;
        // let emailField;

        // it('should update the formData', ()=>{
        //     //signUpBtn = wrapper0.find('.sign-up-button').at(0);
        //     //const fooSpy = jest.spyOn(SignUp, 'doSignUp');
        //     //signUpBtn.simulate('click');
        //     // wrapper0.update()
        //     let signUpBtn = wrapper1.root.find(elem => elem.props.className.contains('sign-up-button'))
        //     // console.log(formData)
        //     // expect(fooSpy).toHaveBeenCalled()
        // })
    })

    // describe('register', ()=> {
    //     it('should register users when form data is provided correctly', () => {
    //         const signUpBtn = wrapper.find('#sign-up-btn');
    //         const emailField = wrapper.find('.email');
            
    //         emailField.at(0).simulate('change', {target: {value: 'My new value'}});
    //         // signUpBtn.simulate('click');
    //         console.log(emailField);
    //         console.log(formData);
    //     });
    // })
})
