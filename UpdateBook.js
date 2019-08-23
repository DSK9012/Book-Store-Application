import React,{Component} from 'react';
import {Input, InputGroup, InputGroupAddon,Button} from 'reactstrap';

class UpdateBook extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <React.Fragment>
                <div className="container" style={{'padding-top':'100px'}}>
                    <div className="row">
                        <div className="col-12">
                            <h2 align="center">Update Book Details In Store</h2>
                            <p align="center">Please enter the valid book details only</p>
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-3">
                        <InputGroup >
                                <Input placeholder="Search book to update...." type="text"/>
                                <InputGroupAddon addonType="append"><Button color="secondary">Search</Button></InputGroupAddon>
                        </InputGroup>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UpdateBook;