// src/App.jsx

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* The Outlet will render either HomePage or a project detail page */}
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App;