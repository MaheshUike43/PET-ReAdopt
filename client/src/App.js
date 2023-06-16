import './App.css';
import Adopt from './Components/Adopt/Adopt';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pets from './Components/Pets/Pets';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import AddPets from './Components/Add_Pets/AddPets';
import Register from './Components/Register/Register';
import ViewPet from './Components/ViewPet/ViewPet';
import UpdatePet from './Components/UpdatePet/UpdatePet';
import DeletePet from './Components/DeletePet/DeletePet';
import ViewPets from './Components/Admin/ViewPets/ViewPets';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pets' element={<Pets />} />
          <Route path='/addpets' element={<AddPets />} />
          <Route path='/adopt' element={<Adopt />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/viewpet' element={<ViewPet />} />
          <Route path='/updatepet' element={<UpdatePet />} />
          <Route path='/deletepet' element={<DeletePet />} />
          <Route path='/admin/viewpets' element={<ViewPets />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
