import { Outlet } from "react-router-dom";

import Header from "./components/header/Header";

function App() {
    return (
        <div className='container mx-auto  px-8 text-black-full'>
            <Header />
            <Outlet />
        </div>
    );
}

export default App;
