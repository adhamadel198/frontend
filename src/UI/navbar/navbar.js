import Navitem from "./navitem";
import SearchBar from "./SearchBar";

const Navbar = () =>{
    return (
        <nav className="">
          <ul className="flex justify-center items-center space-x-2 p-4">
            <Navitem to="/home">Home</Navitem>
            <Navitem to="/articles">Articles</Navitem>
            <Navitem to="/articles/add">Add Articles</Navitem>
            <Navitem to="/">Sign In</Navitem>
            <Navitem to="/register">Sign Up</Navitem>
            <Navitem to="/drafts">drafts</Navitem>
            <SearchBar/>
          </ul>
        </nav>
    );
};

export default Navbar;