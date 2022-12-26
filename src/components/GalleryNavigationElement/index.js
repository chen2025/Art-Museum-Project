import { NavLink } from 'react-router-dom';

const GalleryNavigationElement = ({ galleryid, name }) => {
    return (
        <li>
            <NavLink to={`/galleries/${galleryid}`}>{name}</NavLink>
        </li>
    );
};

export default GalleryNavigationElement;
