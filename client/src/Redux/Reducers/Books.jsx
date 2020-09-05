import {booksActions} from '../ActionTypes';

// initial state
const initialState={
    isLoading:true,
    allBooks:[],
    selectedBook:null,
    searchedBooks:[],
    resMsg:null,
    errMsg:null
}

export const books=(state=initialState, action)=>{
    let {type, payload}=action;
    switch(type){
        case booksActions.BOOKS_LOADING:
            return {...state, isLoading:true};
        case booksActions.BOOKS_LOADING_FAILED:
            return {...state, isLoading:false, errMsg:payload};
        case booksActions.GET_ALL_BOOKS:
            return {...state, isLoading:false, errMsg:null, allBooks:payload};
        case booksActions.GET_SPECIFIC_BOOK:
            return {...state, isLoading:false, errMsg:null, selectedBook:payload };
        case booksActions.POST_BOOK:
            
            return {...state, isLoading:false, errMsg:null, allBooks:state.allBooks.push(payload)};
        case booksActions.UPDATE_BOOK:
            return {...state, isLoading:false, errMsg:null, allBooks:[]};
        case booksActions.DELETE_BOOK:
            return {...state, isLoading:false, errMsg:null, book:[]};
        case booksActions.SEARCH_BOOKS:
            return {...state, isLoading:true, errMsg:null, searchedBooks:payload };
        default:
            return {...state};
    }
}