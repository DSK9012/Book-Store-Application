import React,{Component} from 'react';
import {Input, InputGroup, InputGroupAddon,Button} from 'reactstrap';

class DeleteBook extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <React.Fragment>
                <div className="container" style={{'padding-top':'100px'}}>
                    <div className="row">
                        <div className="col-12">
                            <h2 align="center">Delete Unused Books In Store</h2>
                            <p align="center">Delete the book by seaching book name below</p>
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-3">
                        <InputGroup >
                                <Input placeholder="Search book to delete...." type="text"/>
                                <InputGroupAddon addonType="append"><Button color="secondary">Search</Button></InputGroupAddon>
                        </InputGroup>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default DeleteBook;