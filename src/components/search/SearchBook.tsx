import React, { ChangeEvent, ChangeEventHandler } from 'react'
import style from './SearchBook.module.scss'
import image from '../../assets/images/image.png'

function SearchBook({ value, onChange }: { value: string, onChange: React.Dispatch<React.SetStateAction<string>> }) {

    function handleChange(event: any) {
        onChange(event.target.value)
    }

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <>
            <form className={style.SearchBookForm} onSubmit={onSubmit}>
                <div className={style.SearchContainer}>
                    <input
                        type="text"
                        className={style.SearchInput}
                        value={value}
                        onChange={handleChange}
                        placeholder="Pesquisar livro"
                        required
                    />
                    <button className={style.SearchButton} type='submit'>Pesquisar</button>
                </div>
            </form>
            <div className={value.length > 0 ? style.DisplayNone : style.SearchImage}>
                <img src={image} alt="book" />
            </div>
        </>
    )
}

export default SearchBook;