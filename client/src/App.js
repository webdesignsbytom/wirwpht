import { Routes, Route } from 'react-router-dom';
import Error404 from './pages/error/Error404';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='8' element={<Error404 />} />

      </Routes>
    </>
  );
}

export default App;
