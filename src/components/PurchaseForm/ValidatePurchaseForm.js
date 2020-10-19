export const validate = values => {
    const errors = {};

    //Validate name
    if (!values.firstName) {
        errors.firstName = '* Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = '* Must be 15 characters or less';
    }

    //Validate surname
    if (!values.lastName) {
        errors.lastName = '* Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = '* Must be 20 characters or less';
    }

    //Validate age
    if (!values.age) {
        errors.age = '* Required';
    } else if (isNaN(values.age) || values.age > 100 || !Number.isInteger(values.age)) {
        errors.age = '* Invalid age';
    } else if (values.age < 18) {
        errors.age = '* You must be at least 18 years old'
    }

    // Validate delivery Adress
    if (!values.deliveryAdress) {
        errors.deliveryAdress = '* Required';
    }

    // Validate mobile number
    if (!values.mobileNumber) {
        errors.mobileNumber = '* Required';
    } else if (isNaN(+values.mobileNumber) || !Number.isInteger(+values.mobileNumber)) {
        errors.mobileNumber = '* Invalid mobile number';
    } else if (values.mobileNumber.length !== 13) {
        errors.mobileNumber = '* Must contain 13 digits'
    }

    // Validate date of delivery
    if (values.dateOfDelivery.length <= 0) {
        errors.dateOfDelivery = '* Required';
    } else if (new Date(values.dateOfDelivery) < new Date(Date.now())) {
        errors.dateOfDelivery = '* Incorrect date';
    }

    return errors;
};
