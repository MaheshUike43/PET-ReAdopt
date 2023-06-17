import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Admin from './Components/Admin/Header/Header';
import AddPets from './Components/Admin/Add_Pets/AddPets';
import ViewPets from './Components/Admin/ViewPets/ViewPets';
import UpdatePet from './Components/Admin/UpdatePet/UpdatePet';

import User from './Components/User/Header/Header';
import Adopt from './Components/User/Adopt/Adopt';
import Pets from './Components/User/Pets/Pets';
import Contact from './Components/User/Contact/Contact';
import ViewPet from './Components/User/ViewPet/ViewPet';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import DeletePet from './Components/DeletePet/DeletePet';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/user' element={<User />} />
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
