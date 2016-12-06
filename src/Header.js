import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';
import {browserHistory } from 'react-router'

export default class headComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
  
  // pageMove = (page) => {
  //   this.handleClose();
  //   if(page === "input"){
  //     browserHistory.push('/input');
  //   }else{
  //     browserHistory.push('/top');
  //   }
  // };
  moveTop = () => {
    this.handleClose();
    browserHistory.push('/');
  };
  moveManageServer = () => {
    this.handleClose();
    browserHistory.push('/manage/server');
  };

  render(){ 
  return(
  <AppBar
    title="React-test"
    onLeftIconButtonTouchTap={this.handleToggle}
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    }>
      <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}
      >
        <MenuItem onTouchTap={this.moveTop}>Top</MenuItem>
        <MenuItem onTouchTap={this.moveManageServer}>Manage Server</MenuItem>
      </Drawer>
  </AppBar>
        );
    }
}
