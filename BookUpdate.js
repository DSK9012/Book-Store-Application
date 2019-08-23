import React,{Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom';


class Bookupdate extends Component{

    constructor(props){
        super(props);


    }

    render(){
        return(

            <React.Fragment>
                <div className="container" style={{padding:'100px 0px 0px 0px'}}>
                    <div className="row">
                        <div className="col-12">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/Home" className="bredhome">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem >Updating {this.props.book.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <p className="mb-0">Please update the book details carefully.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-2">
                        <div className="col-12 col-md-6">
                            <Form>
                                <FormGroup>
                                    <Label htmlFor="name" className="ml-1"><b>Book Name</b></Label>
                                    <Input required onChange={this.onStateChange} type="text" name="name" id="name" value={this.props.book.name} placeholder="Enter the Book name" />
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="author" className="ml-1"><b>Author Name</b></Label>
                                    <Input required onChange={this.onStateChange} type="text" name="author" id="author" value={this.props.book.author} placeholder="Enter the Author name" />
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="edition" className="ml-1"><b>Edition</b></Label>
                                    <Input required onChange={this.onStateChange} type="number" name="edition" id="edition" value={this.props.book.edition} placeholder="Enter the Book edition" />
                                </FormGroup>
                            </Form>
                        </div>
                        <div className="col-12 col-md-6 ">
                            <Form>
                                <FormGroup>
                                    <Label htmlFor="price" className="ml-1"><b>Price</b></Label>
                                    <Input required onChange={this.onStateChange} type="number" name="price" id="price" value={this.props.book.price} placeholder="Enter the Book price in rupees" />
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="BookID" className="ml-1"><b>Book ID</b></Label>
                                    <Input required onChange={this.onStateChange} type="number" name="BookID" id="BookID" value={this.props.book.BookID} placeholder="Enter the Book id" />
                                </FormGroup>

                                <FormGroup >
                                    <Label htmlFor="image" className="ml-1"><b>Book Image</b></Label>
                                    <Input required onChange={this.onStateChange} className="imgup" type="file" name="image" id="image" value={this.props.book.image} placeholder="Upload img"/>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 ">
                            <Form>
                                <FormGroup>
                                    <Label htmlFor="Description" className="ml-1"><b>Description</b></Label>
                                    <Input type="textarea" onChange={this.onStateChange} rows="3" name="Description" id="Description" value={this.props.book.Description} placeholder="Describe your book...." />
                                </FormGroup>
                            </Form>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default Bookupdate;