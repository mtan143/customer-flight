import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import ReactDatePicker from "react-datepicker";

  import "react-datepicker/dist/react-datepicker.css";
  import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersAdapterContext } from '@mui/lab';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
DatePicker.propTypes = {
    name: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
    label: PropTypes.string,
};

function DatePicker(props) {
    const { form, name ,label,control} = props;
    return (
        <div>
         <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <Controller 
              as={ReactDatePicker}
              control={form.control}
              valueName="selected" // DateSelect value's name is selected
              onChange={([selected]) => selected}
              name="ReactDatepicker"
              className="input"
              placeholderText="Select date"
              label={label}
              
            
            />
            
            </MuiPickersUtilsProvider>
        </div>
    );
}

export default DatePicker;