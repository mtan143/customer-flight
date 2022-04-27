import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { PropaneSharp } from '@mui/icons-material';
import { TextField } from '@mui/material';

InputField.propTypes = {
   form: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,
   lable: PropTypes.string
};

function InputField(props) {
    const {form, name, lable} = props;
    return (
        <Controller
        name={name}
        control={form.control}
        lable={lable}
        as={TextField}
        // variant="outlined"
        // margin="normal"
        
        />
    );
}

export default InputField;