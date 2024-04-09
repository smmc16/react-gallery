import axios from 'axios';
import { useState, useEffect } from 'react';
import "./GalleryItem.css";

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

    const toggle = () => {
        setToggleVar(!toggleVar);
    }

    return (
        <div data-testid="galleryItem" className='galleryItem'>
            <h3>{item.title}</h3>
            { toggleVar ?
            <img data-testid="toggle" src={item.url} onClick={() => toggle()}/> :
            <p data-testid="toggle" className="description" onClick={() => toggle()}>{item.description}</p>
            }
            <br />
            <button onClick={() => addLike(item.id)} data-testid="like">Like</button>
            {
            item.likes === 1 ? 
            <p>1 like</p> :
            <p>{item.likes} likes</p>
            }
        </div>
    )
};

export default GalleryItem;