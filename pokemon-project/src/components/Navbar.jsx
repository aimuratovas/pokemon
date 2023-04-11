import React, {useState} from "react";
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory();

    const handleSearch = () => {
        if (searchTerm) {
            history.push(`/pokemon/${searchTerm}`);
            setSearchTerm('');
        }
    }

    return (  
        <nav className="nav">
            <h1>POKEDEX</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>           
                </li>
                <li>
                    <Link to="/team">My Team</Link>
                </li>
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder="search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)}/> 
                    <button> Search </button>
                </form>
            </ul>
        </nav>
    );
}
 
export default Navbar;



