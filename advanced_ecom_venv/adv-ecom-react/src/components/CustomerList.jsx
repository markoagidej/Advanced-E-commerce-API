import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerList = ({ onCustomerSelect }) => {
    const navigate = useNavigate();
    const [customerList, setCustomerList] = useState([])
    const [selectedCustomerId, setselectedCustomerId] = useState()
    
    async function fetchCustomerList() {
        try {                
            const response = await axios.get('http://127.0.0.1:5000/customers')
            setCustomerList(await response.data);
        } catch (error) {
            console.error("Error fetching customers list:", error);
        }
    }

    useEffect(() => {
        fetchCustomerList()
    }, [])

    const selectCustomerID = (id) => {
        setselectedCustomerId(id)
        onCustomerSelect(id)
        navigate(`/customers/form/${id}`)
    }

    const deleteCustomer = (id) => {
        try {
            const accountId = ''
            // Getting account id via customer id before deleting customer
            axios.get(`http://127.0.0.1:5000/customer_accounts/${id}`)
            .then(response => {
                accountId = response.data.id
            })
            .catch(error => {
                console.error("Error getting account id by customer id", error)
            })

            // Delete from Customers
            axios.delete(`http://127.0.0.1:5000/customers/${id}`)
            .then(response => {
                console.log("Customer deleted from Customer Table", response.data)
            })
            .catch(error => {
                console.error("Error deleting customer from customer list:", error);
            })

            // Delete from Customer Accounts from gotten id of customer account via customer_id above
            axios.delete(`http://127.0.0.1:5000/customer_accounts/${accountId}`)
            .then(response => {
                console.log("Customer deleted from Customer Account Table", response.data)
            })
            .catch(error => {
                console.error("Error deleting customer from customer list:", error);
            })

            // Refresh customer list display
        } catch (error) {            
            console.error("Error deleting Customer:", error);
        }
        fetchCustomerList()
    }

    return (
        <div>
            <h2>List of Customers:</h2>
            <ul>
                {customerList.map((customer, index) => (
                    <li key={index}>
                        <h4 onClick={() => selectCustomerID(customer.id)}>{customer.name}</h4>
                        <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CustomerList