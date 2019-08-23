/*This is a presentational component(child component), which renders the view for our 
application with the props getting from the Container component*/

/*This is also called functional component, which is used to simply render the view without 
maintaining the state.But here we used arrow function also for our understanding purpose*/


import React,{Component} from 'react';
import {    Card,  
            CardImg, 
            CardImgOverlay, 
            CardSubtitle, 
            CardBody, 
            CardTitle, 
            ButtonGroup, 
            Button,
            InputGroup,
            InputGroupAddon,
            Input} from 'reactstrap';
import {Link} from 'react-router-dom';


class AvailableBooks extends Component{

    constructor(props){
        super(props);

        this.state={
            book:this.props.books
        }
        this.deletebook=this.deletebook.bind(this);
    }

    deletebook(){
        alert("Please confirm before you delete the books in store.\n Click \"Ok\" to delete the book.");
    }


    render(){

        return(
            <Card  key={this.state.book.id}  className="bookcard" >
            <CardImg  width="100%" height="250px" src={this.state.book.image} />
            <CardImgOverlay ><input className="chkboxsize" type="checkbox"/></CardImgOverlay>
            <CardBody >
                <CardTitle><strong>{this.state.book.name}</strong></CardTitle>
                <CardSubtitle>{this.state.book.author}</CardSubtitle>
                <CardSubtitle>Price : {this.state.book.price}/-</CardSubtitle><br/>
                <div className="container">
                    <ButtonGroup >
                        <Link to={`/Home/${this.state.book.id}`} className="btnbook">
                            <Button style={{'border-top-right-radius': '0px', 'border-bottom-right-radius': '0px'}} outline color="dark">
                                <b>Book Details</b>
                            </Button>
                        </Link>
                        <Link to={`/Home/Updatebook/${this.state.book.id}`} className="btnbook">
                            <Button style={{'border-radius':'0px'}} outline color="success">
                                <b>Update</b>
                            </Button>
                        </Link>
                        <Button outline onClick={this.deletebook} color="danger"><b>Delete</b></Button>
                    </ButtonGroup>
                </div>
            </CardBody>
            </Card>
        );
    }
    
}

    const ShowBooks=(props)=>{
    
        const showBooks=props.passBooks.map((book)=>{
            return(
                <div className="col-12 col-md-6 col-lg-4 mt-3"> 
                    <AvailableBooks books={book}/>
                </div>      
                );
            })
    
            return(
                <div className="container ">
                    <div className="row bookhome">
                        <div className="col-12 col-md-4 ">
                            <h2 ><b>Available Books in store</b></h2>
                        </div>
                        <div className="col-12 col-md-5 offset-md-3 " >
                        <InputGroup >
                            <Input placeholder="Search books..." type="text"/>
                            <InputGroupAddon addonType="append"><Button color="secondary">Search</Button></InputGroupAddon>
                        </InputGroup>
                        </div>
                    </div>
                    <hr style={{border:'1px ridge'}}/>
                    <div className="row mt-2">
                        { showBooks }
                    </div>
                </div>
            );
        
    }
        


export default ShowBooks;