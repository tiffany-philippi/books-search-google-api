import React, { useEffect, useState } from 'react';
import BooksList from '../books-list/BooksList';
import SearchBook from '../search/SearchBook';

function Books() {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);
    const url = 'https://www.googleapis.com/books/v1'
    const apiKey = 'AIzaSyAdeMzagSkk7OCpqzvqFgh4Rd_r2BvXClk'
    
    useEffect(() => {
        if (search) {
            fetch(`${url}/volumes?q=${search}&key=${apiKey}`)
                .then((res) => res.json())
                    .then((res) => {
                        setBooks(res)
                    })
        }
    }, [search]);

    return (
        <div>
            <SearchBook value={search} onChange={(search) => setSearch(search)}/>
            <BooksList books={books}/>
        </div>
    )
    
}

export default Books;