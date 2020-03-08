import { useState } from 'react';
const useForm = (callback) => {
    const [values, setValues] = useState({});
    //for any form
    const handleSubmit = (event) => {
        if (event)
            //to stop the page from reloaded
            event.preventDefault();
        callback(values)
    }
    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }))
    }
    const handleInput = {
        onchange: (event) => {
            event.persist();
            setValues(values => ({ ...values, [event.target.name]: event.target.value }))
        }
    }
    return[handleChange,handleInput,handleSubmit,values]
}
export default useForm;