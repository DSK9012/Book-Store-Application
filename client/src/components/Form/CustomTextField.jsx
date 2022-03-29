// Copyright © Bankers Healthcare Group, Inc.  All rights reserved.

import { TextField } from '@material-ui/core';
import { memo, useState } from 'react';
import PropTypes from 'prop-types';

const TextFieldMaterial = memo(
  (props) => {
    const [isError, setIsError] = useState(false);

    const handleChange = (event) => {
      setIsError(false);
      props.onChange(event.target.value);
    };

    const { formatOnBlur, ...rest } = props;

    return (
      <TextField
        {...rest}
        variant='outlined'
        fullWidth
        size='medium'
        autoComplete='off'
        onChange={handleChange}
        onBlur={() => {
          setIsError(true);
          const trimmedValue = String(props.value).trim();
          if (trimmedValue !== String(props.value)) {
            props.onChange(trimmedValue);
          }

          if (formatOnBlur) {
            formatOnBlur();
          }
        }}
        error={props.error && isError}
        helperText={isError && props.error ? props.helperText : ''}
      />
    );
  },
  (previous, next) =>
    previous.value === next.value &&
    previous.helperText === next.helperText &&
    previous.error === next.error &&
    previous.onChange === next.onChange
);

TextFieldMaterial.propTypes = {
  onChange: PropTypes.func.isRequired,
  formatOnBlur: PropTypes.func,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
};

TextFieldMaterial.defaultProps = {
  formatOnBlur: () => {},
};
export default TextFieldMaterial;
