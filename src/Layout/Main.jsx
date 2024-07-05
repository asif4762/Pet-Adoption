import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div className=''>
        {/* Navbar */}
        <Navbar/>
         {/* Routes */}
         <div className='max-w-[90%] mx-auto'>
         <Outlet/>
         </div>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default Main;