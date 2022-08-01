// Copyright © Bankers Healthcare Group, Inc.  All rights reserved.

import { TextField } from '@mui/material';
import { memo, useState } from 'react';

const TextFieldMaterial = memo(
  (props) => {
    const [isError, setIsError] = useState(false);

    const handleChange = (event) => {
      setIsError(false);
      props.onChange(event.target.value);
    };

    const { formatOnBlur, onBlur, ...rest } = props;

    return (
      <TextField
        size='medium'
        {...rest}
        variant='outlined'
        fullWidth
        spellCheck='false'
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

          if (onBlur) {
            onBlur();
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

export default TextFieldMaterial;
