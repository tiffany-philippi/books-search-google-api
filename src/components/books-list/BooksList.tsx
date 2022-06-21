import React from 'react';
import style from './BooksList.module.scss';
import Item from './item/Item';

function BooksList({ books }: { books: any }) {
    return (
        <aside className={style.BooksList}>
            <h2>{books.length > 0 ?? 'Resultados:'}</h2>
            <ul className={style.List}>
                {books?.items?.map((book: any) =>  (
                    <Item
                        key={book.id}
                        item={book}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default BooksList;