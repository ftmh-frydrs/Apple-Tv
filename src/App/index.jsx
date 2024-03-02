import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as paths from "../config/route-paths";

import Home from "../views/Home";
import AppleTv from "../views/Nav/AppleTv";
import MlsSeason from "../views/Nav/MlsSeason";


function App() {
  return (
      <BrowserRouter>
        <Routes>
         <Route path={paths.home} element={<Home />}/>
         <Route path={paths.apple_tv} element={<AppleTv />}/>
         <Route path={paths.mls} element={<MlsSeason />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
