import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerForm = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [errors, setErrors] = useState();

    // handleChange = (event) => {
    //     const {name, value} = event.target;
        
    // }

    validateForm = () => {
        const errors = {};
        if (!name) errors.name = "Name is required";
        if (!email) errors.email = "Email is required";
        if (!phone) errors.phone = "Phone is required";
        return errors;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            console.log("Submitted Customer")

            const customerData = {
                "name": name.trim(),
                "email": email.trim(),
                "phone": phone.trim()
            }

            axios.post('http://127.0.0.1:5000/customers', customerData)
            .then(response => {
                console.log("Data successfully submitted", response.data);
            })
            .catch(error => {
                console.error("THere was an error submitting customer form:", error)
            })

        } else {
            setErrors(errors);
        }
    };

    return (
        <>
        </>
    )
}

export default CustomerForm