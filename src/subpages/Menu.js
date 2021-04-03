import {Link} from "react-router-dom";

import './Menu.css';

export default function Menu() {
    return <nav>
        <ul>
            <li><Link to='/'>Acceuil</Link></li>
        </ul>
    </nav>;
}