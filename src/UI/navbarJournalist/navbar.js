import Navitem from "./navitem";


const Navbar = () =>{
    return (
        <nav className="">
          <ul className="flex justify-center items-center space-x-2 p-4">
            <Navitem to="/articles">Articles</Navitem>
            <Navitem to="/articles/add">Add Articles</Navitem>
            <Navitem to="/drafts">drafts</Navitem>
            
          </ul>
        </nav>
    );
};

export default Navbar;