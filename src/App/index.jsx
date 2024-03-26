import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as paths from "../config/route-paths";

import Home from "../views/Home";
import AppleTv from "../views/Nav/AppleTv";
import MlsSeason from "../views/Nav/MlsSeason";
import Login from "../views/Login";
import Verify from "../views/Verify";


function App() {
  return (
      <BrowserRouter>
        <Routes>
         <Route path={paths.home} element={<Home />}/>
         <Route path={paths.apple_tv} element={<AppleTv />}/>
         <Route path={paths.mls} element={<MlsSeason />}/>
         <Route path={paths.verify} element={<Verify />}/>
         {/* <Route path={paths.login} element={<Login/>} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
