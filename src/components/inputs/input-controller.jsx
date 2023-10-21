import { TextField } from '@mui/material';
import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';
import * as styles from './style';

export function InputController({
  endAdornment = null,
  type = null,
  control = null,
  name = '',
  required = false,
  disabled = false,
  extendOnChange = null,
  ...rest
}) {
  const classes = styles;

  const {
    field,
    fieldState: { error },
  } = useController({ control, name, rules: { required } });

  return (
    <TextField
      {...field}
      id={`${name}-input-outlined`}
      variant="outlined"
      fullWidth
      classes={{ root: classes.root }}
      InputProps={{
        endAdornment,
      }}
      type={type || 'text'}
      required={required}
      error={!!error?.message}
      helperText={error?.message}
      disabled={disabled}
      onChange={(e) => {
        field.onChange(e);
        extendOnChange?.(e.target.value);
      }}
      {...rest}
    />
  );
}
InputController.propTypes = {
  /**
 react-hook-form control. 
  */
  /**
 The component name. 
  */
  name: PropTypes.string,
  /**
 The label you want to display beside the input field. 
  */
  label: PropTypes.string,
  /**
 This field is used in order to disable the input field. 
  */
  disabled: PropTypes.bool,
  /**
 Boolean to validate the component if required or not.  
  */
  required: PropTypes.bool,
  /**
 The placeholder text which will be displayed in the field.  
  */
  placeholder: PropTypes.string,
  /**
  This property represents the field type, the default value is text. 
  */
  type: PropTypes.string,
  /**
  This property represents any additional Props applied to the Input element.  
  */
  endAdornment: PropTypes.func,
  /**
  The event handler function that will be called once event occurred. 
  */
  extendOnChange: PropTypes.func,
};
export default InputController;
