import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { formatAuthors } from '../books-list/item/Item';
import style from './BookDetailModal.module.scss';
import image from '../../assets/images/no-book-cover.png';

function BookDetailModal(props: any) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props?.book?.title}
                    <span className={style.ModalAuthors}>{formatAuthors(props?.book?.authors)} | {props?.book?.publishedDate?.substring(0, 4)}</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={style.ModalBody}>
                    <img src={props?.book.imageLinks?.thumbnail ?? image} alt="" />
                    <div>
                        <h3>Sinopse</h3>
                        <p>
                            {props?.book?.description}
                        </p>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default BookDetailModal;