import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/RaisedButton';

export const RemoveDlg = (props) => {
    const actions = [
       <FlatButton
         label="NO"
         primary={true}
         onTouchTap={ props.handleClose }
       />,
       <FlatButton
         label="YES"
         secondary={true}
         keyboardFocused={true}
         onTouchTap={ props.handleOK }
       />,
     ];
    return (
      <Dialog
        title="Confirm remove Blog?"
        actions={actions}
        modal={false}
        open={props.open}
        onRequestClose={props.handleClose}
      >
        Do you sure to remove this Blog?
        <br />
        { props.blog.title }
      </Dialog>
    )
}

RemoveDlg.propTypes = {
  open: React.PropTypes.bool.isRequired,
  blog: React.PropTypes.object.isRequired,
  handleClose: React.PropTypes.func.isRequired,
  handleOK: React.PropTypes.func.isRequired
}

export default RemoveDlg;
