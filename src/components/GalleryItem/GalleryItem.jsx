import axios from 'axios';
import { useState, useEffect } from 'react';
import "./GalleryItem.css";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';

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
            <h3>{item.title}</h3>
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
            <p>1 like</p> :
            <p>{item.likes} likes</p>
            }
        </Card>
    )
};

export default GalleryItem;