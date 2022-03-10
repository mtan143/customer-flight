import React from 'react';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
// import { register } from './features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit'
import { register } from '../../userSlice';






Register.propTypes = {
    
};

function Register(props) {
    const dispatch = useDispatch ();
    const handleSubmit = async (values) => {
        

        try {
        values.username = values.email;
        const action = register(values);
        const resultAction = await dispatch(action);  
        const user = unwrapResult(resultAction);
        console.log('New user', user);
        } catch (error) {
            console.log('Failed to register:', error);
        }
    };
    return (
        <div>
           <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;