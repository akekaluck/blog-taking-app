import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/RaisedButton';

export const RemoveDlg = (props) => {
    const actions = [
       <FlatButton
         label="Cancel"
         primary={true}
         onTouchTap={ props.handleClose }
       />,
       <FlatButton
         label="OK"
         primary={true}
         keyboardFocused={true}
         onTouchTap={ props.handleOK }
       />,
     ];
    return (
      <Dialog
        title="Dialog With Actions"
        actions={actions}
        modal={false}
        open={props.open}
        onRequestClose={props.handleClose}
      >
        The actions in this window were passed in as an array of React objects.
      </Dialog>
    )

}

export default RemoveDlg;
