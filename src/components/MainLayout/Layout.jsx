import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;