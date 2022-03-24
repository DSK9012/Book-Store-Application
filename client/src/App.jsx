import { Navigate, Route, Routes } from 'react-router';
import Home from 'components/Home';
import BookDetails from 'components/BookDetails/BookDetails';
import AddBook from 'components/AddBook/AddBook';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/home/book-details/:bookId' element={<BookDetails />} />
      <Route path='/add-book' element={<AddBook />} />
    </Routes>
  );
}

export default App;
