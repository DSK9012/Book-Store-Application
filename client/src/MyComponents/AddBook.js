import React,{Component} from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

class AddBook extends Component{

    constructor(props){
        super(props);

        this.state={
            name:'',
            author:'',
            edition:'',
            price:'',
            BookID:'',
            image:'',
            Description:''
        }
        
        this.onSubmit=this.onSubmit.bind(this);
        this.onStateChange=this.onStateChange.bind(this);
    }

    onStateChange(getevent){
        const get=getevent.target;
        const name=get.name;

        this.setState({
            [name]:get.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        alert("State is"+JSON.stringify(this.state));
        
    }

    render(){
        return(
            <React.Fragment >
                <div className="container-fluid addbook">
                <div className="container" style={{padding:'100px 0px 0px 0px'}} >
                    <h2 align="center">Add Books In Store</h2>
                    <p align="center">Contribute your book in our store to help others</p>
                    <hr style={{border:'1px solid silver'}}/>
                    <div className="row mt-2">
                        <div className="col-12 col-md-6">
                            <Form>
                                <FormGroup>
                                    <Label htmlFor="name" className="ml-1"><b>Book Name</b></Label>
                                    <Input required onChange={this.onStateChange} type="text" name="name" id="name" value={this.state.name} placeholder="Enter the Book name" />
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="author" className="ml-1"><b>Author Name</b></Label>
                                    <Input required onChange={this.onStateChange} type="text" name="author" id="author" value={this.state.author} placeholder="Enter the Author name" />
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="edition" className="ml-1"><b>Edition</b></Label>
                                    <Input required onChange={this.onStateChange} type="number" name="edition" id="edition" value={this.state.edition} placeholder="Enter the Book edition" />
                                </FormGroup>
                            </Form>
                        </div>
                        <div className="col-12 col-md-6 ">
                            <Form>
                                <FormGroup>
                                    <Label htmlFor="price" className="ml-1"><b>Price</b></Label>
                                    <Input required onChange={this.onStateChange} type="number" name="price" id="price" value={this.state.price} placeholder="Enter the Book price in rupees" />
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="BookID" className="ml-1"><b>Book ID</b></Label>
                                    <Input required onChange={this.onStateChange} type="number" name="BookID" id="BookID" value={this.state.BookID} placeholder="Enter the Book id" />
                                </FormGroup>

                                <FormGroup >
                                    <Label htmlFor="image" className="ml-1"><b>Book Image</b></Label>
                                    <Input required onChange={this.onStateChange} className="imgup" type="file" name="image" id="image" value={this.state.image} placeholder="Upload img"/>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 ">
                            <Form>
                                <FormGroup>
                                    <Label htmlFor="Description" className="ml-1"><b>Description</b></Label>
                                    <Input type="textarea" onChange={this.onStateChange} rows="3" name="Description" id="Description" value={this.state.Description} placeholder="Describe your book...." />
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <Button onClick={this.onSubmit} type="submit" color="success">SUBMIT</Button>
                    </div>
                    <br/>   
                </div>
                </div>
            </React.Fragment>
        );
    }

}

export default AddBook;