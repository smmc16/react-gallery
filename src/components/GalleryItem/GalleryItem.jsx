import axios from 'axios';
import { useState, useEffect } from 'react';
import "./GalleryItem.css";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';

function GalleryItem({item, getGallery}) {
    const [toggleVar, setToggleVar] = useState(true);

    const addLike = (id) => {
        axios.put(`/api/gallery/like/${id}`).then((response) => {
            getGallery();
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong');
        })
    }

    const deleteImage = (id) => {
        axios.delete(`/api/gallery/delete/${id}`).then((response) => {
            getGallery();
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong');
        })
    }

    const toggle = () => {
        setToggleVar(!toggleVar);
    }

    return (
        <Card data-testid="galleryItem" className='galleryItem'>
            <Typography variant="h5">{item.title}</Typography>
            { toggleVar ?
            <img data-testid="toggle" src={item.url} onClick={() => toggle()}/> :
            <p data-testid="toggle" className="description" onClick={() => toggle()}>{item.description}</p>
            }
            <br />
            <ButtonGroup variant="contained">
            <Button onClick={() => addLike(item.id)} data-testid="like" className="like" color='success'>Like</Button>
            <Button onClick={() => deleteImage(item.id)} color='error'>Delete</Button>
            </ButtonGroup>
            {
            item.likes === 1 ? 
            <Typography>1 like</Typography> :
            <Typography>{item.likes} likes</Typography>
            }
        </Card>
    )
};

export default GalleryItem;