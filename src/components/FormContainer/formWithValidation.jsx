import { useState } from "react"
export const formWithValidation = ( FormWrappedComponent ) => {
    const NewFormWithValidation = (props) => {
        const [errors, setErrors]= useState({});

        const validateForm= () => {
            let newError={};
            let isValid =true;
            if( !props.formData.name) {
                newError.name='El campo nombre es obligatorio';
                isValid= false;
            }
            if( !props.formData.email) {
                newError.email='El campo email es obligatorio';
                isValid= false;
            }
            setErrors( newError );
            return isValid;
        }

        return (
            <FormWrappedComponent
                {...props }
                errors={errors}
                validateForm={validateForm}
            />
        )
    }
    return NewFormWithValidation
}