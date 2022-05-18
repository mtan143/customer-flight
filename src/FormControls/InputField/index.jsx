import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { PropaneSharp } from '@mui/icons-material';
import {  TextField } from '@mui/material';

InputField.propTypes = {
   form: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,
   lable: PropTypes.string
};

function InputField(props) {
    const {form, name, lable , disable} = props;
    // const {errors} = form;
    // const hasError =  errors[name] ;


    // console.log(errors[name], formState.touched[name]);
    return (
        <Controller
        name={name}
        control={form.control}
        label={lable}
        render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
            <TextField
              margin="normal"
              variant="outlined"
              fullWidth
              
            //   error={!!hasError}
            //   helperText={errors[name]?.message}
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              value={value}
              disabled={disable}
            />
        )}
        />  
        
        
        // margin="normal"
        // label="Nhập"
       

      
        
      
    );
}

export default InputField;