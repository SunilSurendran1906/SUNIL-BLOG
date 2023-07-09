import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import FullStackDevelopment from './Components/FullStackDevelopment';
import CyberSecurity from './Components/CyberSecurity';
import DataScience from './Components/DataScience';
import UIUX from './Components/UIUX';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">

        <Header/>
        <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/FullStackDevelopment' element={<FullStackDevelopment/>}/>
        <Route path='/CyberSecurity' element={<CyberSecurity/>}/>
        <Route path='/DataScience' element={ <DataScience/>}/>
        <Route path='/UIUX' element={<UIUX/>}/>  
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
