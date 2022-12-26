import { Link } from 'react-router-dom';


const ArtImageTile = ({ art, galleryId }) => {
    return (
        <li>
            <Link to={`/galleries/${galleryId}/art/${art.id}`}>
                <img src={art.primaryimageurl} alt="artImage" />
            </Link>
        </li>
    );
};

export default ArtImageTile;
