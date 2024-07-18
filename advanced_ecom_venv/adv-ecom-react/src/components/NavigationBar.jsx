import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'
import '../NavigationBar.css'

const NavigationBar = () => {
    return (
        <nav className='rounded'>
            <NavLink to='/' activeclassname='active'>Home</NavLink>
            <NavLink to='/customers/show' activeclassname='active'>Customers List</NavLink>
            <NavLink to='/customers/form' activeclassname='active'>Customer Editing</NavLink>
            <NavLink to='/products/show' activeclassname='active'>Products List</NavLink>
            <NavLink to='/products/form' activeclassname='active'>Product Editing</NavLink>
        </nav>
    );
};

export default NavigationBar;