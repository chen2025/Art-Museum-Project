import React from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ArtDescription({galleries}) {
    const { galleryid, artid } = useParams();

    const gallery = galleries.find(element => element.gallerynumber === galleryid);

    const art = gallery.objects.find(item => item.id === parseInt(artid));

    return (
        <ul>
            <li>
                <Link to={`/galleries/${galleryid}`}>Back to Gallery {gallery.name}</Link>
            </li>
            <li>
                <a href={art.url} target="_blank" rel="noreferrer">{art.title}</a>
            </li>
        </ul>
    );
}

export default ArtDescription;
