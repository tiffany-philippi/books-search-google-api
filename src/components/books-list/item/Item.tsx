import React from 'react';
import style from '../BooksList.module.scss';
import image from '../../../assets/images/no-book-cover.png';
import BookDetailModal from '../../book-detail/BookDetailModal';

export function formatAuthors(authors: []) {
    let authorsList: [] = [];
    authors?.map(author => authorsList.push(author))
    return authorsList.length > 0 ? authorsList.toString().replace(',', ', ') : 'Desconhecido';
}

function Item({ item }: any) {
    const [modalShow, setModalShow] = React.useState(false);
    const book = item.volumeInfo;

    function listItem() {
        return <li className={style.Item}>
            <div className={style.ItemCard}>

                <div className={style.ItemCardInfoContainer}>
                    <img className={style.ItemCardImage} src={book.imageLinks?.thumbnail ?? image} alt="book cover" />
                    <h2 className={style.ItemCardTitle}>{book.title}</h2>

                    <div className={style.ItemCardInfo}>
                        <p className={style.ItemCardAuthors}>{formatAuthors(book.authors)} </p>
                        <span className={style.ItemCardYear}> | {book.publishedDate?.substring(0, 4)}</span>
                    </div>
                </div>

                <div className={style.ItemCardButtonContainer}>
                    <button className={style.ItemCardButton} onClick={() => setModalShow(true)}>
                        Ver mais
                    </button>

                    <BookDetailModal show={modalShow} onHide={() => setModalShow(false)} book={book}/>
                </div>
            </div>
        </li>
    }

    function noResults() {
        return <p>Sem resultados.</p>
    }

    if (book) {
        return listItem()
    } else {
        return noResults()
    }
}

export default Item;
