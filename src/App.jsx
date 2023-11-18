import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Admin from './Components/Admin';
import PageNotFound from './Components/PageNotFound';
import View from './Components/View';
import Edit from './Components/Edit';
import Add from './Components/Add';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Admin />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/add' element={<Add />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
