/*This is a presentational component(child component), which renders the view for our 
application with the props getting from the Container component*/

/*This is also called functional component, which is used to simply render the view without 
maintaining the state.But here we haven't used any arrow functions, we just simply use normal 
function to render the view*/


import React,{Component} from 'react';
import {    Card, 
            CardImg, 
            CardHeader, 
            CardBody, 
            Button,
            Breadcrumb,
            BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

    class BookDetails extends Component{
        constructor(props){
            super(props);

            
            this.deletebook=this.deletebook.bind(this);
        }

        deletebook(){
            alert("Click \"Ok\" to delete the book.");
        }

        render(){
        
                if(this.props.passSelectedBook!=null)
                {
                 
                    return(
                        <div className="container" style={{padding:'100px 0px 0px 0px'}}>
                            <div className="row mt-0">
                                <div className="col-12">
                                    <Breadcrumb>
                                        <BreadcrumbItem>
                                            <Link to="/Home" className="bredhome">Home</Link>
                                        </BreadcrumbItem>
                                        <BreadcrumbItem active>
                                            {this.props.passSelectedBook.name}
                                        </BreadcrumbItem>
                                    </Breadcrumb>
                                </div>
                                <div className="col-12">
                                    <h2 className="ml-2">{this.props.passSelectedBook.name}</h2>
                                    <hr />
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <Card>
                                        <CardImg  height="400px"  src={this.props.passSelectedBook.image} alt={this.props.passSelectedBook.name}/>
                                    </Card>            
                                </div>
    
                                <div className="col-12 col-md-8">
                                    <Card className="bookdet"  outline color="info">
                                    <CardHeader  style={{backgroundColor:'turquoise', 'text-align':'center'}}><strong>Book Details</strong></CardHeader>
                                        <CardBody  >
                                            <dl className="row" >
                                                <dt class="col-6">Book name</dt>
                                                <dd class="col-6">{ this.props.passSelectedBook.name}</dd>
    
                                                <dt class="col-6">Author</dt>
                                                <dd class="col-6">{ this.props.passSelectedBook.author}</dd>
    
                                                <dt class="col-6">Price</dt>
                                                <dd class="col-6">{ this.props.passSelectedBook.price}/-</dd>
    
                                                <dt class="col-6">BookID</dt>
                                                <dd class="col-6">{ this.props.passSelectedBook.BookID}</dd>
    
                                                <dt class="col-6">Description</dt>
                                                <dd class="col-6">{ this.props.passSelectedBook.Description}</dd>

                                                <dt class="col-6">Edition</dt>
                                                <dd class="col-6">{ this.props.passSelectedBook.edition}</dd>
                                            
                                            </dl>
    
                                            <div align="center">
                                                <Button className="btnsize1" color="success">Update</Button><br/>
                                                <Button onClick={this.deletebook} className="btnsize2" color="danger">Delete</Button>
                                            </div>
    
                                        </CardBody>                
                                    </Card>
                                </div>  
                            </div>
                        </div>
                    );
                }
            else{
                return(<div></div>);
            }
           
        }



    }
            
       
    
  
        
    

export default BookDetails;