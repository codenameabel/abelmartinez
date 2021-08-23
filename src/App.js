import React, { useState } from 'react';
// import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>

      <main>
        {!contactSelected ? (
            <>
            <About></About>
            <Projects></Projects>
            </>
        ) : (
          <Resume></Resume>  
        )}
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
