import { useFormik } from 'formik';
import { object } from 'yup';
import { useStore } from 'store/Store';
import addBookValidations from './Validations';

export default function useAddBookFormik() {
  const {
    booksContext: { addBook },
  } = useStore();

  return useFormik({
    initialValues: {
      bookName: '',
      bookAuthor: '',
      institute: '',
      recommendedClass: '',
      edition: '',
      accessType: '',
      tags: '',
      description: '',
      bookCover: '',
      bookFile: '',
    },
    validateOnMount: true,
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: object(addBookValidations),
    onSubmit: (values, { resetForm, setSubmitting }) => {
      setSubmitting(true);
      addBook(values, resetForm, setSubmitting);
    },
  });
}
