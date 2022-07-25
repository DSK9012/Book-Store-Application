import { styled } from '@mui/material';
import Header from 'components/Header/Header';
import { $Container } from 'pages/Home';
import useAddBookFormik from 'formik/AddBookFormik';
import AddBookForm from 'components/AddBook/AddBookForm';

const $AddBookText = styled('h3')(({ theme }) => ({
  fontSize: theme.spacing(2.75),
  letterSpacing: 0.2,
  lineHeight: 1.4,
  padding: theme.spacing(1, 0, 2),
}));

function AddBook() {
  const formik = useAddBookFormik();

  return (
    <$Container>
      <Header />
      <$AddBookText>Add Book</$AddBookText>
      <AddBookForm formik={formik} />
    </$Container>
  );
}

export default AddBook;
