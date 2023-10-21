import { Search } from '@mui/icons-material';
import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useStyles } from './style';

export const FixedSingleValueLookup = React.forwardRef(
  (
    {
      control,
      helpText,
      id,
      permission,
      title,
      required,
      disabled,
      name,
      extendOnChange,
      getOptionLabel,
      handleOptions,
      parameters = {},
      placeholder,
      options,
    },
    ref
  ) => {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState('');

    const {
      field,
      fieldState: { error },
    } = useController({ control, name, rules: { required } });

    useEffect(() => {
      setInputValue(field.value?.title || '');
    }, [field.value]);
    return (
      <Autocomplete
        id="fix-single-value-lookup"
        getOptionLabel={(option) => {
          return getOptionLabel ? getOptionLabel(option) : option?.title || '';
        }}
        options={options || []}
        onChange={(e, v) => {
          field.onChange({ target: { value: v || null } });
          extendOnChange?.(v);
        }}
        isOptionEqualToValue={(option, value) => {
          return option?.value === value?.value;
        }}
        value={field.value || ''}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        disableClearable
        classes={{ paper: classes.paper }}
        disabled={disabled}
        renderInput={(params) => {
          return (
            <TextField
              // {...field}
              {...params}
              label={title}
              fullWidth
              type="text"
              required={required}
              error={!!error?.message}
              helperText={error?.message}
              disabled={disabled}
              InputProps={{
                ...params.InputProps,
                endAdornment: <Search />,
              }}
              placeholder={placeholder}
            />
          );
        }}
      />
    );
  }
);

FixedSingleValueLookup.propTypes = {
  /**
   The form control embraces uncontrolled component and native inputs 
  */
  control:PropTypes.object,
  /**
  The display content of the button
  */
  helpText:PropTypes.string,
  /**
  The display content of the button
  */
  id :PropTypes.number,
  /**
  The display content of the button
  */
  permission:PropTypes.string,
  /**
  The display content of the button
  */
  title:PropTypes.string,
  /**
  The display content of the button
  */
  required:PropTypes.bool,
  /**
  The display content of the button
  */
  disabled:PropTypes.bool,
  /**
  Unique name of the component 
  */
  name:PropTypes.string,
  /**
  The service url need to be invoked to get the option list 
  */
  url:PropTypes.string,
  /**
  The display content of the button
  */
  extendOnChange:PropTypes.func,
  /**
  To parse the service response and get the values and titles for each option 
  */
  getOptionLabel:PropTypes.func,
  /**
  To get the service options object 
  */
  handleOptions:PropTypes.func,
  /**
  The display content of the button
  */
  parameters:PropTypes.object,
  /**
  The placeholder text which will be displayed in the field.  
  */
  placeholder:PropTypes.string,   
};
export default FixedSingleValueLookup;
