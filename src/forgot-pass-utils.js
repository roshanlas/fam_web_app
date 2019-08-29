export const fields = {
    email: {comp: null, error: false, label: 'Email', required: true, type: "text"},
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
    return errors;
}

/**
 * Performs fetch request and invokes callback
 * @param {*} formData
 */
export const submitData = async (formData, service) => {
    return await fetch(
        // TODO Update URL
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