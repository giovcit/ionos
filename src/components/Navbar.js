import React from 'react';
import links from '../utils/links';
import {Link} from 'react-router-dom';


const Navbar = () => {
    
    return <>
	<ul>
	{
	    links.map((el) => {

		return <li key={el.id}><Link to={el.url}>{el.nome}</Link></li>
	    })

	}
	
	</ul>
	</>;

}


export default Navbar;
