import React,{Component} from 'react';
import './Header.css'
import Modal from 'react-modal'

import Button from '@material-ui/core/Button';



class Header extends Component{
    constructor(){
        super();
        this.state={
            modalIsOpen:false

        };
    }
    openModalHandler= ()=>{
        this.setState({modalIsOpen:true})
    }
    closeModelHandler= () =>{
        this.setState({modalIsOpen:false})
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

                </Modal>
                
            </div>

        )
    }
    
}
export default Header;