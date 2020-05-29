import React, { Component } from 'react';
import './Header.css'
import Modal from 'react-modal'

import { Button } from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';


const setstyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto'

    }
}

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: "0" }}>
            {props.children}
        </Typography>


    )
}
class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0

        };
    }
    openModalHandler = () => {
        this.setState({ modalIsOpen: true })
    }
    closeModelHandler = () => {
        this.setState({ modalIsOpen: false })
    }
    tabChangeHandler = (event, value) => {
        this.setState({ value });

    }
    render() {
        return (
            <div>
                {/* <Button variant="contained" color="default">Login</Button> */}
                <div className="header-com">
                    <img className="app-logo" src={"https://cdn.upgrad.com/UpGrad/temp/81930fe3-8dc5-47d1-b7f9-d00847a4f057/logo.svg"} alt="s" />
                    <button style={{ float: "right", marginRight: "15px", marginTop: "8px" }} onClick={this.openModalHandler}>Login</button></div>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login"
                    onRequestClose={this.closeModelHandler} style={setstyle}>

                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="login" />
                        <Tab label="register" />
                    </Tabs>
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="username">username</InputLabel>
                            <Input id="username" type="text" required/>
                        </FormControl>
                        <FormControl required>
                            <InputLabel htmlFor="password">password</InputLabel>
                            <Input id="password" type="password" required/>
                        </FormControl>
                    </TabContainer>


                </Modal>

            </div>

        )
    }

}
export default Header;