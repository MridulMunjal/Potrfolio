import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Skills from './components/skills';
import About from './components/about';
import Experience from './components/experience';

const App = () => {
  return (
    <BrowserRouter> 
      <div className="bg-slate-700">
        <Header />
        <div className="flex flex-col justify-items-center">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/exp" element={<Experience />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
