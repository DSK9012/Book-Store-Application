import { useFormik } from 'formik';

export default function useAddBookFormik() {
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
    validationSchema: '',
    onSubmit: () => {},
  });
}
