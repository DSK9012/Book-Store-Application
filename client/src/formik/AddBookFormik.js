import { useFormik } from 'formik';
import { useStore } from 'store/store';

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
    validationSchema: '',
    onSubmit: (values, { resetForm, setSubmitting }) => {
      setSubmitting(true);
      addBook(values, resetForm, setSubmitting);
    },
  });
}
