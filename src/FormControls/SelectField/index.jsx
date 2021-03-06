import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { MenuItem, Select } from '@mui/material';

SelectField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
};

function SelectField(props) {
    const {form, name,data} = props;
    const {errors} = form;
    const hasError =  errors[name] ;
    return (
        <Controller
            name={name}
            control={form.control}
            as={
                <Select >
                        { Object.entries(data).map(([key,value],i) => <MenuItem key={i} value={key}>{value}</MenuItem>) }   
                </Select>
            }
            error={!!hasError}
        helperText={errors[name]?.message}
        />
    );
}

export default SelectField;