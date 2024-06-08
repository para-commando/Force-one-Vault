import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Handler from './components/Handler';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Handler />
      <Footer />
    </>
  );
}

export default App;
