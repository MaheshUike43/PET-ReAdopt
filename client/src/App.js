import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

import Admin from './Components/Admin/Header/Header';
import AddPets from './Components/Admin/Add_Pets/AddPets';
import ViewPets from './Components/Admin/ViewPets/ViewPets';
import UpdatePet from './Components/Admin/UpdatePet/UpdatePet';

import User from './Components/User/Header/Header';
import Adopt from './Components/User/Adopt/Adopt';
import Pets from './Components/User/Pets/Pets';
import Contact from './Components/User/Contact/Contact';
import PetProfile from './Components/User/PetProfile/PetProfile';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/viewpets' element={<ViewPets />} />
          <Route path='/admin/addpets' element={<AddPets />} />
          <Route path='/admin/updatepet' element={<UpdatePet />} />

          <Route path='/user' element={<User />} />
          <Route path='/user/pets' element={<Pets />} />
          <Route path='/user/adopt' element={<Adopt />} />
          <Route path='/user/contact' element={<Contact />} />
          <Route path='/user/petprofile' element={<PetProfile />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
