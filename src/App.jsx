import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Handler from './components/Handler';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Handler />
    </>
  );
}

export default App;
