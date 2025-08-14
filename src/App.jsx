// src/App.jsx

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
     
      <main className="flex flex-col min-h-screen">
        {/* The Outlet will render either HomePage or a project detail page */}
        <div className="flex-grow">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
