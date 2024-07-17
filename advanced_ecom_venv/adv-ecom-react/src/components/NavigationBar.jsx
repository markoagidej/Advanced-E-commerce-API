import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'
import '../NavigationBar.css'

const NavigationBar = () => {
    return (
        <nav>
            <NavLink to='/' activeclassname='active'>Home</NavLink>
            <NavLink to='/customers/show' activeclassname='active'>Customers List</NavLink>
            <NavLink to='/customers/form' activeclassname='active'>Customer Editing</NavLink>
        </nav>
    );
};

export default NavigationBar;