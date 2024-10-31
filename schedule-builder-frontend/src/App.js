import React, { useEffect } from 'react';
import { Input, Ripple, initMDB } from 'mdb-ui-kit'; // Import necessary MDB components
import 'mdb-ui-kit/css/mdb.min.css'; // Import MDB CSS styles
import LoginPage from './pages/LoginPage';

function App() {
  useEffect(() => {
    // Initialize MDB UI Kit components
    initMDB({ Input, Ripple });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;