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
            Input,
            Col,
            Row,
            Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import {getAllBooks} from '../Redux/Actions/Books';

class AvailableBooks extends Component{

    constructor(props){
        super(props);

        this.state={
            showCheckbox: false,
            selectedBooks:[]
        }
        this.deletebook=this.deletebook.bind(this);
    }

    componentDidMount(){
        // this.props.books();
    }

    deletebook(){
        alert("Please confirm before you delete the books in store.\n Click \"Ok\" to delete the book.");
    }

    handleSelect = (e, id) => {
        console.log(e)
        e.stopPropagation();
    }

    render() {
        console.log(this.state);
        let { id, image, name, author, price } = this.props.books;
        let { showCheckbox, selectedBooks } = this.state;
        let {books}=this.props;
        return (
            <React.Fragment>
                <Link to={`/Home/${id}`} style={{ textDecoration: 'none' }}
                    onMouseEnter={() => this.setState({ showCheckbox: true })}
                    onMouseLeave={() => this.setState({ showCheckbox: false })}
                >
                    <Card key={id} className="bookcard" >
                    <CardImg src={`/images/${name}.jpg`} width="100%" height="180px" />
                    <CardBody className="p-3" >
                        <CardTitle style={{display:'flex', alignItems:'center', fontWeight:'bold'}}>
                            {name}
                            {(showCheckbox || (selectedBooks.length>0 && selectedBooks.indexOf(id)!==-1)) &&
                            <input  type="checkbox"
                                    className="checkbox"
                                    onChange={this.handleSelect}
                                    onClick={e=>e.stopPropagation()}
                                    style={{position:'absolute', right:'15px'}}
                            />
                            }
                        </CardTitle>
                        <CardSubtitle>{author}</CardSubtitle>
                            <CardSubtitle>Price : {price}/-</CardSubtitle>
                                <Row className="ml-2 mr-2 pt-1" style={{ textAlign: 'center'}}>
                                    <Col>
                                        <FontAwesomeIcon    icon={faEdit} 
                                                            color="#00bcd4"
                                                            style={{cursor:'pointer'}} 
                                        />
                                    </Col>
                                    <Col>
                                        <FontAwesomeIcon    icon={faTrash} 
                                                            color="crimson"
                                                            style={{cursor:'pointer'}} 
                                        />
                                    </Col>
                                </Row>
                    </CardBody>
                    </Card>
                </Link>
            </React.Fragment>
        );
    }
}

    const ShowBooks=(props)=>{
    
        const showBooks=props.books.length>0 && props.books.map((book, index)=>{
            return(
                <div key={index} className="col-12 col-md-6 col-lg-3"> 
                    <AvailableBooks books={book}/>
                </div>      
                );
            })
            console.log(props);
            return(
                <div className="container ">
                    <div className="row" style={{marginTop:'100px'}}>
                        <div className="col-12 col-md-4 ">
                            <h5 style={{fontWeight:'bold'}}>Available Books</h5>
                        </div>
                        <div className="col-12 col-md-4 offset-md-4" style={{ display: 'flex', alignItems: 'center' }} >
                            <Input placeholder="Search books..." type="text"/>
                            <FontAwesomeIcon icon={faSearch} color="#00bcd4" style={{ position: 'absolute', right: '30px'}} />
                        </div>
                    </div>
                    <hr style={{border:'1px ridge'}}/>
                    <div className="row mt-1">
                        { showBooks }
                    </div>
                </div>
            );
        
    }
        

const mapStateToProps=state=>({
    books:state.books.allBooks
});

export default connect(mapStateToProps, {getAllBooks})(ShowBooks);