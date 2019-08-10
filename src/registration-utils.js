export const fields = {
    email: {comp: null, error: false, label: 'Email', required: true}, 
    password: {comp: null, error: false, label: 'Password', required: true}, 
    repeatPassword: {comp: null, error: false, label: 'Repeat Password', required: true}, 
    firstName: {comp: null, error: false, label: 'First Name', required: true}, 
    lastName: {comp: null, error: false, label: 'Last Name', required: true},
    dob: {comp: null, error: false, label: 'Date of Birth dd/mm/yyyy', required: true}, 
    gender: {comp: null, error: false, label: 'Gender', required: true}, 
    marriageStatus: {comp: null, error: false, label: 'Marriage Status', required: false}, 
    occupation: {comp: null, error: false, label: 'Occupation', required: false}, 
    residence: {comp: null, error: false, label: 'Residence', required: false}, 
    city: {comp: null, error: false, label: 'City', required: true},
    homeAddress: {comp: null, error: false, label: 'Home Address', required: false}, 
    postCode: {comp: null, error: false, label: 'Post Code', required: false}
  };

  
/**
 * Converts an object to another type
 * @param {*} formData
 * @param {*} fields
 */
export const populateFormData = (fields) => {
    let formData = {};
    Object.keys(fields).forEach(
        f=>Object.assign(formData, { [`${f}`]: fields[`${f}`].comp.value })
    )
    return formData;
}
  
/**
 * 
 * @param {*} formData 
 */
export const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  
export const validateFields = (formData) => {
    let errors = {};
    if(!validateEmail(formData['email'])) {
        Object.assign(errors, {'email':'Please enter a valid email address'})
    }
    if(formData['password'] !== formData['repeatPassword']) {
        Object.assign(errors, {'password':'The passwords do not match'})
        Object.assign(errors, {'repeatPassword':'The passwords do not match'})
    }
    if(formData['password'].length === 0 || formData['repeatPassword'].length === 0) {
        Object.assign(errors, {'password':'Please enter a valid password'})
        Object.assign(errors, {'repeatPassword':'Please enter a valid password'})
    }
    if(formData['firstName'].length === 0) {
        Object.assign(errors, {'firstName':'Please enter your first name'})
    }
    if(formData['lastName'].length === 0) {
        Object.assign(errors, {'lastName':'Please enter your last name'})
    }
    if(formData['dob'].length === 0) {
        Object.assign(errors, {'dob':'Please enter your date of birth'})
    }
    if(formData['city'].length === 0) {
        Object.assign(errors, {'city':'Please enter your city'})
    }
    return errors;
}

/**
 * Performs fetch request and invokes callback
 * @param {*} formData
 */
export const submitData = async (formData, service) => {
    return await fetch(
        // URL
        `${process.env.REACT_APP_API_URL}/${service}`, 
        // Data
        {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {"Content-Type": "application/json"}
        }
    )
}

export default validateEmail;