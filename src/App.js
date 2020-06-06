import React from 'react';
import { Routes, Route } from 'react-router';

import firebase, { FirebaseContext } from './firebase/index';

import Ordenes from './components/paginas/Ordenes';
import NuevoPlatillo from './components/paginas/NuevoPlatillo';
import MenuP from './components/paginas/Menu';
import SideBar from './components/ui/Sidebar';

function App() {
  return (
    <FirebaseContext.Provider
      value={{firebase}}
    >
      <div className="md:flex min-h-screen">
        <SideBar />
        <div className="md:w-3/5 xl:w-4/5 p-6">
          <Routes>
            <Route path='/' element={<Ordenes />} />
            <Route path='/nuevo-platillo' element={<NuevoPlatillo />} />
            <Route path='/menu' element={<MenuP />} />
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
