import React ,{useState} from 'react'
import Sidebar from '../components/SideBar';
import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
const HomePage = () => {
    const [isOpen,setIsOpen] = useState(false);


    const toggleSidebar= () =>{
        setIsOpen(!isOpen);
    }
return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
        <NavBar toggle={toggleSidebar} />
        <Hero/>
    </>
)
}

export default HomePage