import axios from "axios";
import './GalleryForm.css';
import { useState, useEffect } from 'react';

function GalleryForm({getGallery}) {
    const [imageUrl, setImageUrl] = useState('');
    const [imageTitle, setImageTitle] = useState('');
    const [imageDesc, setImageDesc] = useState('');
    const data = {url: imageUrl, title: imageTitle, description: imageDesc}

    function addImage(e) {
        e.preventDefault();
        axios.post('/api/gallery', data).then((response) => {
            getGallery();
            setImageUrl('');
            setImageTitle('');
            setImageDesc('');
        }).catch(error => {
            console.log(error);
            alert('Something went wrong!');
        })
    }

    return (
        <form onSubmit={addImage}>
            Image Url:<input type="text" onChange={(e) => setImageUrl(e.target.value)}/>
            Title:<input type="text" onChange={(e) => setImageTitle(e.target.value)}/>
            Description:<input type="text" onChange={(e) => setImageDesc(e.target.value)}/>
            <input type="submit" />
        </form>
    )
}

export default GalleryForm;