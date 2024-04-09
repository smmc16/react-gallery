import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'; 
import GalleryForm from '../GalleryForm/GalleryForm';
import './GalleryList.css'

function GalleryList() {
    const [gallery, setGallery] = useState([]);

    function getGallery() {
        axios.get('/api/gallery').then((response) => {
            setGallery(response.data);
        }).catch(error => {
            console.log(error);
            alert('Something went wrong!');
        })
    }

    useEffect(() => {
        getGallery();
    }, []);

    return (
        <>
        <GalleryForm getGallery={getGallery} />
        <div data-testid="galleryList" className="list">
        {gallery.map(item => (
            <GalleryItem key={item.id} item={item} getGallery={getGallery} />
        ))}
        </div>
        </>
    )

};

export default GalleryList;