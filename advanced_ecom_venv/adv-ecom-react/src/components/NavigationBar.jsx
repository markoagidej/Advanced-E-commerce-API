import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'
import '../NavigationBar.css'

const NavigationBar = () => {
    return (
        <nav>
            <NavLink to='/' activeClassName='active'>Home</NavLink>
            <NavLink to='/customers' activeClassName='active'>Customers</NavLink>
        </nav>
    );
};

export default NavigationBar;