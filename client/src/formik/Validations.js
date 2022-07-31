// Regex for (809) 6056-899 - /^\(?([2-9]\d{2})\)? ?(\d{3})-?(\d{4})$/
import { string } from 'yup';

const fieldBlankError = 'Field cannot be left blank.';
const requiredString = string().required(fieldBlankError);

const minBookNameCharacters = 3;
const maxBookNameCharacters = 255;
const minAuthorNameCharacters = minBookNameCharacters;
const maxAuthorNameCharacters = maxBookNameCharacters;

const addBookValidations = {
  bookName: requiredString
    .min(minBookNameCharacters, 'Characters length should be greater than or equal to 2.')
    .max(maxBookNameCharacters, 'Characters length should not exceed 255.'),
  bookAuthor: requiredString
    .min(minAuthorNameCharacters, 'Characters length should be greater than or equal to 2.')
    .max(maxAuthorNameCharacters, 'Characters length should not exceed 255.'),
  institute: requiredString
    .min(minAuthorNameCharacters, 'Characters length should be greater than or equal to 2.')
    .max(maxAuthorNameCharacters, 'Characters length should not exceed 255.'),
  recommendedClass: requiredString,
  edition: requiredString,
  accessType: requiredString,
  tags: requiredString,
  description: requiredString,
  bookCover: requiredString,
  bookFile: requiredString,
};

export default addBookValidations;
