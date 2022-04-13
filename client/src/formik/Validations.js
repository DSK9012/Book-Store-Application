// Copyright © Bankers Healthcare Group, Inc.  All rights reserved.

import { string } from 'yup';

const fieldBlankError = 'Field cannot be left blank.';
const requiredString = string().required(fieldBlankError);

export const newAppValidations = {
  email: string().trim().email('Please enter a valid email address.'),
  phone: string()
    .trim()
    .matches(/^\(?([2-9]\d{2})\)? ?(\d{3})-?(\d{4})$/, 'Please enter a valid mobile phone number.'),
};

const minNameCharacters = 2;
const maxNameCharacters = 255;
const nameRegexPattern = /^[a-z][\w-.+ ]+$/i;
export const addUserValidations = {
  firstName: requiredString
    .min(minNameCharacters, 'Characters length should be greater than or equal to 2.')
    .max(maxNameCharacters, 'Characters length should not exceed 255.')
    .matches(nameRegexPattern, 'Please enter a Valid First Name.'),
  lastName: requiredString
    .min(minNameCharacters, 'Characters length should be greater than or equal to 2.')
    .max(maxNameCharacters, 'Characters length should not exceed 255.')
    .matches(nameRegexPattern, 'Please enter a Valid Last Name.'),
  email: newAppValidations.email.required(fieldBlankError),
  phone: newAppValidations.phone,
};
