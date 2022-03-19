import React from 'react';
import CharacterItem from './Characteritem'

const Charactergrid = ({ items, isLoading }) => {
    return isLoading ? (
    <h1>Loading...</h1>
    ) : (
      <section className='cards'>
        {items.map((item) => (
            <CharacterItem key={item.char_id} item={item}></CharacterItem>

        ))}
    </section>
    )
}

export default Charactergrid;