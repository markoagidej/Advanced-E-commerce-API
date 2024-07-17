import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerList = () => {
    const navigate = useNavigate();
    const [customerList, setCustomerList] = useState([])
    
    useEffect(() => {
        async function fetchCustomerList() {
            try {                
                const response = await axios.get('http://127.0.0.1:5000/customers')
                setCustomerList(await response.data);
                console.log(response)
            } catch (error) {
                console.error("Error fetching customers list:", error);
            }
        }
        fetchCustomerList()
    }, [])

    const selectCustomerID = (id) => {
        onCustomerSelect(id)
        navigate(`/customers/${id}`)
    }

    return (
        <div>
            <h3>List of Customers:</h3>
            <ul>
                {customerList.map((customer, index) => (
                    <li key={index} onClick={() => selectCustomerID(customer.id)}>
                        <h3>{customer.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CustomerList