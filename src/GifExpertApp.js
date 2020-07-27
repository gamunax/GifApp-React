import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  // const initialCategories = ['One Punch', 'Samurai X', 'Dragon ball'];
  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   setCategories(cats => [...categories, 'One Piece'] );
  //   console.log(categories);
  // }

  return (
    <div>
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr></hr>        

        <ol>
           { 
            categories.map( (category) => 
              <GifGrid 
                key={ category }
                category={category} />
            )
           }
        </ol>
      </>
    </div>
  )
}
