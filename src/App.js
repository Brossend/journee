import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import { MainLayout } from './layout/MainLayout';
import { MapYa } from './components/map/MapYa';
import { Main } from './components/main/Main';
import { Development } from './components/development/Development';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/journee/" element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path="/journee/map/" element={<MapYa />} />
            <Route path="/journee/dev/" element={<Development />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
