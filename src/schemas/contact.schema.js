import yup from 'yup';

const stringSchema = yup.object().shape({
    value: yup.string().required()
});
// const requiredSchema = yup.object().shape({
//     value: yup.required()
// });

export const isStringRequired = (valueToValidate) => {
    debugger
    stringSchema.isValid(
        {value: valueToValidate}
    ).then((valid) => {
        debugger;
        return valid;
    })
}
