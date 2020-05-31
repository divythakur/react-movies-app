import React, { Component } from 'react';
import './Header.css'
import Modal from 'react-modal'

import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText'

const setstyle = {
    content: {
        top: '20%',
        left: '50%',
        right: 'auto',
        bottom: 'auto'

    }
}

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: "0", textAlign: "center" }}>
            {props.children}
        </Typography>


    )
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}
class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            usernameRequired: "dispnone",
            passwdRequired: "dispnone",
            username: "",
            passwd: ""

        };
    }
    openModalHandler = () => {
        this.setState({ modalIsOpen: true })
    }
    closeModelHandler = () => {
        this.setState({ modalIsOpen: false })
        this.setState({ value: 0 })
        this.setState({ usernameRequired: "dispnone" })
    }
    tabChangeHandler = (event, value) => {
        this.setState({ value });

    }
    onLoginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispblock" }) : this.setState({ usernameRequired: "dispnone" })
        this.state.passwd === "" ? this.setState({ passwdRequired: "dispblock" }) : this.setState({ Required: "dispnone" })

    }
    onUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value })

    }
    onPassChangeHandler = (e) => {
        this.setState({ passwd: e.target.passwd })
    }
    render() {
        return (
            <div>
                {/* <Button variant="contained" color="default">Login</Button> */}
                <div className="header-com">
                    <img className="app-logo" src={"https://cdn.upgrad.com/UpGrad/temp/81930fe3-8dc5-47d1-b7f9-d00847a4f057/logo.svg"} alt="s" />
                    <button style={{ float: "right", marginRight: "15px", marginTop: "8px" }} onClick={this.openModalHandler}>Login</button></div>
                <Modal ariaHideApp={true} isOpen={this.state.modalIsOpen} contentLabel="Login"
                    onRequestClose={this.closeModelHandler} style={setstyle}>

                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="login" />
                        <Tab label="register" />
                    </Tabs>
                    {this.state.value === 0 &&
                        <TabContainer>

                            <FormControl required>
                                <InputLabel htmlFor="username">username</InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.onUsernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}><span className="red">Required</span></FormHelperText>
                            </FormControl><br />
                            <FormControl required>
                                <InputLabel htmlFor="password">password</InputLabel>
                                <Input id="password" type="password" passwd={this.state.passwd} onChange={this.onPassChangeHandler} />
                                <FormHelperText className={this.state.passwdRequired}><span className="red">Required</span></FormHelperText>

                            </FormControl><br /><br />
                            <Button variant="contained" color="primary" onClick={this.onLoginClickHandler}>LOGIN</Button>

                        </TabContainer>}
                    {this.state.value === 1 &&
                        <TabContainer>

                            <FormControl required>
                                <InputLabel htmlFor="firstname">First name</InputLabel>
                                <Input id="firstname" type="text" />
                                <FormHelperText><span className="red">Required</span></FormHelperText>
                            </FormControl><br />
                            <FormControl required>
                                <InputLabel htmlFor="LastName">Lastname</InputLabel>
                                <Input id="lastname" type="text" />
                                <FormHelperText><span className="red">Required</span></FormHelperText>

                            </FormControl><br />
                            <FormControl required>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" type="email" />
                                <FormHelperText ><span className="red">Required</span></FormHelperText>

                            </FormControl><br />
                            <FormControl required>
                                <InputLabel htmlFor="password">Email</InputLabel>
                                <Input id="password" type="password" />
                                <FormHelperText ><span className="red">Required</span></FormHelperText>

                            </FormControl><br />
                            <FormControl required>
                                <InputLabel htmlFor="phone">Phone</InputLabel>
                                <Input id="phone" type="number" />
                                <FormHelperText ><span className="red">Required</span></FormHelperText>

                            </FormControl><br />


                            <Button variant="contained" color="primary" onClick={this.onLoginClickHandler}>LOGIN</Button>

                        </TabContainer>


                    }


                </Modal>

            </div>

        )
    }

}
export default Header;