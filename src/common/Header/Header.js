import React,{Component} from 'react';
import './Header.css'
import Modal from 'react-modal'

import {Button} from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class Header extends Component{
    constructor(){
        super();
        this.state={
            modalIsOpen:false,
            value:0

        };
    }
    openModalHandler= ()=>{
        this.setState({modalIsOpen:true})
    }
    closeModelHandler= () =>{
        this.setState({modalIsOpen:false})
    }
    tabChangeHandler=(event,value)=>{
        this.setState({value});

    }
    render(){
        return(
            <div>
                {/* <Button variant="contained" color="default">Login</Button> */}
                <div className="header-com">
                    <img  className="app-logo" src={"https://cdn.upgrad.com/UpGrad/temp/81930fe3-8dc5-47d1-b7f9-d00847a4f057/logo.svg"} alt="s" />
                <button style={{float:"right",marginRight:"15px",marginTop:"8px"}} onClick={this.openModalHandler}>Login</button></div>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login"
                onRequestClose={this.closeModelHandler}>
                    
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                         <Tab label="login" />
                         <Tab label="register" />
                     </Tabs>
                    

                </Modal>
                
            </div>

        )
    }
    
}
export default Header;