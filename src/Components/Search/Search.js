import React, { useState } from 'react'
import classes from './search.module.css';


const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResult] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();

        console.log('OK');
        // const results = data.filter(product => 
        //     product.name.toLowerCase().includes(searchTerm.toLowerCase())
        //     );
        //     setSearchResult(results);
    }
  return (
    <div className={classes.search}>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Search' value={searchTerm} onChange={handleChange} />
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default Search