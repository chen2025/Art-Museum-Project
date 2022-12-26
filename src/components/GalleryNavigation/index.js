import { NavLink } from 'react-router-dom';
import GalleryNavigationElement from '../GalleryNavigationElement';
import "./GalleryNavigation.css";

function GalleryNavigation({records}) {
    return (
      <nav>
        <h1>Galleries</h1>
        <ul>
            <li>
                <NavLink to="/" exact={true}>Home Page</NavLink>
            </li>
            {records.map((item) => (
                <GalleryNavigationElement key={item.galleryid} {...item} />
            ))}
        </ul>
      </nav>
    );
}

export default GalleryNavigation;
