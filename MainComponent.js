//This is a Container Component(parent component), which maintains state of our React Application

import React,{Component} from 'react';
import {Books} from '../DATA/BooksInStore';
import AvailableBooks from '../MyComponents/AvailableBooks';
import BookDetails from '../MyComponents/ViewBookDetails';
import AddBook from '../MyComponents/AddBook';
import UpdateBook from '../MyComponents/UpdateBook';
import BookUpdate from '../MyComponents/BookUpdate';
import DeleteBook from '../MyComponents/DeleteBook';
import NavComponent from '../MyComponents/NavbarComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import '../App.css';

class Main extends Component {
  
  constructor(props){
    super(props);

    this.state={
      BooksFromStore: Books,
    }

  }

  




  render(){
    
    const Bookdet=({match})=>{
      return(
        <BookDetails passSelectedBook={this.state.BooksFromStore.filter((book)=>book.id===parseInt(match.params.bookId,10))[0]} />
      );
    };

    const bookupdate=({match})=>{
      return(
        <BookUpdate book={this.state.BooksFromStore.filter((book)=>book.id===parseInt(match.params.bookId,10))[0]} />
      );
    };
    return (
        <React.Fragment>
           <NavComponent />
        <Switch>
        
           

            <Route exact path="/Home" component={()=><AvailableBooks passBooks={this.state.BooksFromStore}/>} />   
            <Route exact path='/Home/:bookId' component={Bookdet} />
            <Route exact path="/Home/Updatebook/:bookId" component={bookupdate} />
            <Route exact path="/Add Books" component={AddBook}/>
            <Route exact path="/Update Book" component={UpdateBook}/> 
            <Route exact path="/Delete Book" component={DeleteBook}/>
            
            <Redirect to="/Home"/>
            
            

        
        </Switch>
        </React.Fragment>
    );
  }
}


export default Main;
