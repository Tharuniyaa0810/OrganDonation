import React from "react";
import {BrowserRouter ,Routes,Route } from 'react-router-dom';
import Donor from "./Donor";
import ListDonor from "./ListDonor";

import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./home";
import Homepage from "./homepage";
import About from "./about";
import UpdateDonor from "./UpdateDonor";

function App()
{
    return(
        <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/homeuser" element={<Homepage/>}></Route>
                <Route path="/sign" element={<SignUp/>}></Route>
                <Route path="/donor" element={<Donor/>}></Route>
                <Route path="/edit/:id" element={<UpdateDonor/>}></Route>
                <Route path="/list" element={<ListDonor/>}></Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
}
export default App;
