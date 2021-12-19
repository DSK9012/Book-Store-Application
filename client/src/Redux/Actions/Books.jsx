import {booksActions} from '../ActionTypes';
import axios from 'axios';

export const getAllBooks=()=>async dispatch=>{
    dispatch({
        type:booksActions.BOOKS_LOADING
    });
    try {
        const result=await axios.get('http://localhost:5000/api/books/fetchbooks');
        dispatch({
            type:booksActions.GET_ALL_BOOKS,
            payload:result.data
        });
    } catch (error) {
        dispatch({
            type:booksActions.BOOKS_LOADING_FAILED,
            payload:error.response ? error.response.data : error.message
        });
        console.log(error.response ? error.response.data : error.message);
    }
}

export const getSelectedBook=bookId=>async dispatch=>{
    dispatch({
        type:booksActions.BOOKS_LOADING
    });
    try {
        const result=await axios.get(`http://localhost:5000/api/books/fetchbookdetails/${bookId}`);
        dispatch({
            type:booksActions.GET_SPECIFIC_BOOK,
            payload:result.data
        });
    } catch (error) {
        dispatch({
            type:booksActions.BOOKS_LOADING_FAILED,
            payload:error.response ? error.response.data : error.message
        });
        console.log(error.response ? error.response.data : error.message);
    }
}

export const postBook=bookInfo=>async dispatch=>{
    try {
        const result=await axios.post('/api/books/insertbook', bookInfo);
        dispatch({
            type:booksActions.POST_BOOK,
            payload:result
        });
    } catch (error) {
        dispatch({
            type:booksActions.BOOKS_LOADING_FAILED,
            payload:error.response ? error.response.data : error.message
        });
        console.log(error.response ? error.response.data : error.message);
    }
}

export const updateBook=bookInfo=>async dispatch=>{
    try {
        const result=await axios.put('/api/books/updatebook', bookInfo);
        dispatch({
            type:booksActions.UPDATE_BOOK,
            payload:result
        });
    } catch (error) {
        dispatch({
            type:booksActions.BOOKS_LOADING_FAILED,
            payload:error.response ? error.response.data : error.message
        });
        console.log(error.response ? error.response.data : error.message);
    }
}

export const deleteBook=bookId=>async dispatch=>{
    try {
        const result=await axios.delete('/api/books/deletebook', bookId);
        dispatch({
            type:booksActions.DELETE_BOOK,
            payload:result
        });
    } catch (error) {
        dispatch({
            type:booksActions.BOOKS_LOADING_FAILED,
            payload:error.response ? error.response.data : error.message
        });
        console.log(error.response ? error.response.data : error.message);
    }
}

export const searchBooks=(searchInput, books)=>async dispatch=>{
    try {
        // search books

        dispatch({
            type:booksActions.SEARCH_BOOKS,
            payload:''
        });
    } catch (error) {
        dispatch({
            type:booksActions.BOOKS_LOADING_FAILED,
            payload:error.response ? error.response.data : error.message
        });
        console.log(error.response ? error.response.data : error.message);
    }
}