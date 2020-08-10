import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const [count, setCount] = useState(0);
  const [images, setimages] = useState([]);

  useEffect( () => {
    getGifs();
  }, [])

  const getGifs = async () => {

    const url = 'https://api.giphy.com/v1/gifs/search?q=rick and morty&limit=10&api_key=b5VC478eD1oiRwFyWTVs62FO0ZPHwdlJ';
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })

    console.log(gifs);
    setimages(gifs);
  }

  return (
    <>
      <h3>{ category }</h3>
      <div className="card-grid">
        
        {
          images.map(img => (
            <GifGridItem 
              key={img.id}
              {...img}></GifGridItem>
          ))
        }
        
      </div>
    </>
    
  )
}
