import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerForm = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState();

    const handleChange = (event) => {
        const {name, value} = event.target;
        if (name == "name") {
            setName(value)
        } else if (name == "email") {
            setEmail(value)
        } else if (name == "phone") {
            setPhone(value)
        } else if (name == "username") {
            setUsername(value)
        } else if (name == "password") {
            setPassword(value)
        }
    }

    const validateForm = () => {
        const errors = {};
        if (!name) errors.name = "Name is required";
        if (!email) errors.email = "Email is required";
        if (!phone) errors.phone = "Phone is required";
        if (!username) errors.username = "Username is required";
        if (!password) errors.password = "Password is required";
        return errors;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {

            const customerData = {
                "name": name.trim(),
                "email": email.trim(),
                "phone": phone.trim()
            }

            const customerAccountData = {
                "username": username.trim(),
                "password": password.trim()
            }

            const placeCustomer = async () => {
                try {
                    await axios.post('http://127.0.0.1:5000/customers', customerData)
                    .then(response => {
                        console.log("Data successfully submitted", response.data);
                    })
                    .catch(error => {
                        console.error("There was an error submitting customer form:", error)
                    })
        
                    // Add customer account via some get request to get customer id of newly created customer
                    const response =  await axios.get('http://127.0.0.1:5000/customers')
                    const lastIndex = await response.data.length - 1
                    const newCustomerId = await response.data[lastIndex].id
                    customerAccountData.customer_id = await newCustomerId
        
                    axios.post('http://127.0.0.1:5000/customer_accounts', customerAccountData)
                    .then(response => {
                        console.log("Data successfully submitted", response.data);
                    })
                    .catch(error => {
                        console.error("There was an error submitting customer form:", error)
                    })
                } catch (error) {
                    console.error("Issue adding new customer", error)
                }    
            }
            placeCustomer();
        } else {
            setErrors(errors);
        }
    };

    return (
        <>
            {/* {selectedCustomerID ? (
                <h1>Edit Customer</h1>
            ) : (
                <h1>Add Customer</h1>
            )} */}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type='text' name='name' value={name} onChange={handleChange}/>
                </label>
                <br />
                <label>
                    Email:
                    <input type='email' name='email' value={email} onChange={handleChange}/>
                </label>
                <br />
                <label>
                    Phone:
                    <input type='tel' name='phone' value={phone} onChange={handleChange}/>
                </label>
                <br />
                <label>
                    Username:
                    <input type='text' name='username' value={username} onChange={handleChange}/>
                </label>
                <br />
                <label>
                    Password:
                    <input type='text' name='password' value={password} onChange={handleChange}/>
                </label>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default CustomerForm