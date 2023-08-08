import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';


import Admin from './Components/Admin/Header/AdminHeader';
import AddPets from './Components/Admin/Add_Pets/AddPets';
import AllPets from './Components/Admin/AllPets/AllPets';
import AdminPetProfile from './Components/Admin/PetProfile/PetProfile';
import UpdatePet from './Components/Admin/UpdatePet/UpdatePet';
import AllUsers from './Components/Admin/AllUsers/AllUsers';
import UserProfile from './Components/Admin/UserProfile/UserProfile';
import UpdateUser from './Components/Admin/UpdateUser/UpdateUser';
import AllReq from './Components/Admin/AllReq/AllReq';
import ViewReqs from './Components/Admin/ViewReqs/ViewReqs';
import UpdateReq from './Components/Admin/UpdateReq/UpdateReq';


import User from './Components/User/Header/UserHeader';
import Pets from './Components/User/Pets/Pets';
import Adopt from './Components/User/Adopt/Adopt';
import PetProfile from './Components/User/PetProfile/PetProfile';
import Contact from './Components/User/Contact/Contact';
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';


function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/viewpets' element={<ViewPets />} />
          <Route path='/admin/addpets' element={<AddPets />} />
          <Route path='/admin/allusers' element={<AllUsers />} />
          <Route path='/admin/updatepet' element={<UpdatePet />} />
          <Route path='/admin/updateuser' element={<UpdateUser />} />
          <Route path='/admin/userprofile' element={<UserProfile />} />


          <Route path='/user' element={<User />} />
          <Route path='/user/pets' element={<Pets />} />
          <Route path='/user/adopt' element={<Adopt />} />
          <Route path='/user/contact' element={<Contact />} />
          <Route path='/user/petprofile' element={<PetProfile />} />
          
        </Routes> */}

        <>

          <Routes>
            <Route path='/home' element={<Home />} />
            <Route exact path="/" element={user ? <Navigate to="/dashboard" /> : <Home />}>
              {/* {user ? <Navigate to="/dashboard" /> : <Home />} */}
            </Route>
            <Route path='/register' element={<Register />}>
              {/* <Register /> */}
            </Route>
            <Route path='/login' element={user ? <Navigate to="/dashboard" /> : <Login />}>
              {/* {user ? <Navigate to="/dashboard" /> : <Login />} */}
            </Route>
            <Route path='/dashboard' element={user?.isAdmin ? <Navigate to="/admin" /> : <Navigate to="/user" />}>
              {/* {user?.isAdmin ? <Navigate to="/admin" /> : <Navigate to="/user" />} */}
            </Route>
            {user && user.isAdmin && (
              <>
                <Route path='/admin' element={user ? <Admin /> : <Navigate to="/" />}>
                  {/* <Admin /> */}
                </Route>
                <Route path='/admin/addpets' element={<AddPets />}>
                  {/* <AddPets /> */}
                </Route>
                {/* <Route path='/admin/deletepet'>
                <DeletePet />
              </Route> */}

                <Route path='/admin/updatepet' element={<UpdatePet />}>
                  {/* <UpdatePet /> */}
                </Route>
                <Route path='/admin/petprofile' element={<AdminPetProfile />}>
                  {/* <UpdatePet /> */}
                </Route>
                <Route path='/admin/allpets' element={<AllPets />}>
                </Route>
                <Route path='/admin/allusers' element={<AllUsers />}>
                </Route>
                <Route path='/admin/userprofile' element={<UserProfile />}>
                </Route>
                <Route path='/admin/updateuser' element={<UpdateUser />}>
                </Route>
                <Route path='/admin/allrequests' element={<AllReq />}>
                </Route>
                <Route path='/admin/viewreqs' element={<ViewReqs />}>
                </Route>
                <Route path='/admin/updatereq' element={<UpdateReq />}></Route>

              </>
            )}

            {user && !user.isAdmin && (
              <>
                <Route path='/user' element={user ? <User /> : <Navigate to="/" />}>
                  {/* <User /> */}
                </Route>
                <Route path='/user/pets' element={<Pets />}>
                  {/* <Pets /> */}
                </Route>
                <Route path='/user/adopt' element={<Adopt />}>
                  {/* <Adopt /> */}
                </Route>
                <Route path='/user/petprofile' element={<PetProfile />}>
                  {/* <PetProfile /> */}
                </Route>
                <Route path='/user/contact' element={<Contact />}>
                  {/* <Contact /> */}
                </Route>
              </>
            )}

          </Routes>
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
