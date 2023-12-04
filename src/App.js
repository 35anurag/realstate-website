import React from 'react'
import {Route, Routes} from 'react-router-dom'

//import files 
import Header from './components/Header'
import Footer from './components/Footer'

// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return (
    <div className='bg-white mx-auto max-w-[1440px]'>
      <Header />
      <Routes >
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
        </Route>
      </Routes> 
      <Footer />
    </div>
  )
}

export default App