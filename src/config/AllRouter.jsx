import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppleTv from "../views/Navbar/AppleTv";
import MlsSeason from "../views/Navbar/MlsSeason";

const AllRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/AppleTv" element={<AppleTv />} />
                <Route path="/mls" element={<MlsSeason />} />
            </Routes>
        </Router>
    );
};

export default AllRouter;
