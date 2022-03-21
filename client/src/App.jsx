import { Navigate, Route, Routes } from 'react-router';
import Home from 'components/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/home' />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
