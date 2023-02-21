import { Routes, Route } from 'react-router-dom';
import Item from './components/item/Item';
import Error404 from './pages/error/Error404';
import Home from './pages/home/Home';
import ItemPage from './pages/itemPage/ItemPage';
import Upload from './pages/upload/Upload';

function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} index />
        <Route path='/upload' element={<Upload />} />
        <Route path='/item' element={<ItemPage />} />
        
        {/* Error paths */}
        <Route path='*' element={<Error404 />} />

      </Routes>
    </>
  );
}

export default App;
