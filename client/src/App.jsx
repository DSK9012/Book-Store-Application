import { Navigate, Route, Routes } from 'react-router';
import Home from 'pages/Home';
import BookDetails from 'pages/BookDetails';
import AddBook from 'pages/AddBook';

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
