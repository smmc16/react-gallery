import axios from "axios";
import './GalleryForm.css';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';

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
            <Typography>Image Url:</Typography><TextField size="small" type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required/>
            <Typography>Title:</Typography><TextField size="small" type="text" value={imageTitle} onChange={(e) => setImageTitle(e.target.value)} required/>
            <Typography>Description:</Typography><TextField size="small" type="text" value={imageDesc} onChange={(e) => setImageDesc(e.target.value)} required/>
            <br />
            <br />
            <Button variant="contained" type="submit">Submit</Button>
        </form>
    )
}

export default GalleryForm;