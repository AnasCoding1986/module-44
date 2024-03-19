import { useState } from "react";
import List from "../List/List";
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Product Details', path: '/products/:id' },
        { id: 5, name: 'Contact', path: '/contact' }
      ];

      const toggle = () => {
        setMenu(!menu)
      }
      
    return (
        <div className="container mx-auto ">
            <div onClick={() => toggle()} className="text-2xl mr-28">
            {
                menu === true ? <RiMenu2Line></RiMenu2Line> : <IoCloseSharp />
            }
              
            </div>
            <ul className={`md:flex md:absolute p-10 font-semibold duration-75 ${menu? 'hidden' : ''} pl-10 pb-3 bg-slate-600 text-white rounded-sm`}>
            {
                routes.map(route => <List  key={route.id} route={route}></List>)
            } 
            </ul>
        </div>
    );
};

export default Navbar;