import axios from "axios";
import './GalleryForm.css';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
            Image Url:<TextField size="small" type="text" onChange={(e) => setImageUrl(e.target.value)}/>
            Title:<TextField size="small" type="text" onChange={(e) => setImageTitle(e.target.value)}/>
            Description:<TextField size="small" type="text" onChange={(e) => setImageDesc(e.target.value)}/>
            <br />
            <Button variant="contained" type="submit">Submit</Button>
        </form>
    )
}

export default GalleryForm;