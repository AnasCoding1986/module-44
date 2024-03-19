import { list } from "postcss";

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Product Details', path: '/products/:id' },
        { id: 5, name: 'Contact', path: '/contact' }
      ];
      
    return (
        <div>
            {
                routes.map(route => <li key={route.id}><a href={route.path}>`{route.name}`</a></li>)
            }
        </div>
    );
};

export default Navbar;