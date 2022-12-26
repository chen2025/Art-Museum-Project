import React from "react";
import { useParams } from 'react-router-dom';
import ArtImageTile from "../ArtImageTile";

function GalleryView({galleries}) {

    const { galleryid } = useParams();

    const gallery = galleries.find(element => element.gallerynumber === galleryid);

    return (
        <div>
            <h1>Hello from GalleryView { galleryid }!</h1>
            <h2>{gallery.name}</h2>
            <ul>
                {gallery.objects.map((item) => (
                    <ArtImageTile key={item.id} art={item} galleryId={galleryid}/>
                ))}
            </ul>
        </div>
    );
}

export default GalleryView;
