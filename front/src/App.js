import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import SearchPage from './components/Searchpage';

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />}></Route>
          <Route path={'/api/searchpage'} element={<SearchPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;