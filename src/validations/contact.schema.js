import yup from 'yup';

const firstnameRules = yup.string().required('First name is requiered');
const lastnameRules = yup.string().required('Lastname is required');
const emailRules = yup.string().required(
    'Email is required'
).email(
    'This should have an email format'
);
const countryRules= yup.string().required('Country is required');


const contactSchema = yup.object().shape({
    firstname: firstnameRules,
    lastname: lastnameRules,
    email: emailRules,
    country: countryRules
});

const firstnameSchema = yup.object().shape({
    firstname: yup.string().required('First name is requiered'),
});

const lastnameSchema = yup.object().shape({
    lastname: lastnameRules,
});

const emailSchema = yup.object().shape({
    email: emailRules
});

const countrySchema = yup.object().shape({
    country: countryRules
})


export const contactIsValid = (contact) => {
    contactSchema.validate(contact, (errors, value) => {
        return false;
    })
}

export const firstnameIsValid = (firstname) => {
    firstnameSchema.validate(firstname, (errors, value) => {
        return false;
    })
}

export const lastnameIsValid = (lastname) => {
    lastnameSchema.validate(lastname, (errors, value) => {
        return false;
    })
}

export const emailIsValid = (email) => {
    emailSchema.validate(email, (errors, value) => {
        return false;
    })
}

export const countryIsValid = (country) => {
    countrySchema.validate(country, (errors, value) => {
        return false;
    })
}