import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Exercise from './pages/Exercise/Exercise';
import PuffLoader from 'react-spinners/PuffLoader'; // Import the loader

function App() {
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Simulate data fetching or any initialization
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after some time
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <PuffLoader size={100} color={'#E22626'} /> {/* Loader component */}
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/exercise/:id' element={<Exercise />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
