import { useState } from "react";
import { FormCart } from "./FormCart";
import { formWithValidation } from "./formWithValidation";
const FormWithValidation = formWithValidation( FormCart )

export const FormContainer = ({handleOrder}) => {
    const [formData,setFormdata] = useState({
        name:'',
        email:'',
        phone:''
    });
    const handleOnChange= (evt) => {
        setFormdata({
            ...formData,
            [evt.target.name]:evt.target.value
        })
    }
    return (
        <FormWithValidation handleOrder={handleOrder} handleOnChange={handleOnChange} formData={formData} />
    )
}