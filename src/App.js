import React from 'react'
  import './App.css'
  import Navbar from './components/Navbar';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Créationentreprise from './components/Créationentreprise';
  import Sinformer from './components/Sinformer';
  import Espaceclient from './components/Espace client';
  import Servicespourentreprises from './components/Services_pour_entreprises';
  import Categories_data from './components/Categories_data';
 
  
  function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Servicespourentreprises />} />
          <Route path='/Espaceclient' element={<Espaceclient />} />
          <Route path='/Sinformer' element={<Sinformer />} />
          <Route path='/Offres_Création' element={<Créationentreprise data={Categories_data.Offres_Création} />} />
          <Route path='/Formes_Juridiques' element={<Créationentreprise data={Categories_data.Formes_Juridiques} />} />
          <Route path='/SUARL' element={<Créationentreprise data={Categories_data.SUARL} />} />
          <Route path='/SARL' element={<Créationentreprise data={Categories_data.SARL} />} />
          <Route path='/SA' element={<Créationentreprise data={Categories_data.SA} />} />
          <Route path='/Entreprise_individuelle' element={<Créationentreprise data={Categories_data.Entreprise_individuelle} />} />
          <Route path='/Export' element={<Créationentreprise data={Categories_data.Export} />} />
        </Routes>
      </Router>
  
    )
  }
  
  export default App;
