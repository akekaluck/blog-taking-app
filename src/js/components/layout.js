import React from 'react';
import AppBar from 'material-ui/AppBar';

class Layout extends React.Component {
  render(){
    return (
      <div>
        <AppBar
          title='Blog'
          showMenuIconButton={false}
        />
        {this.props.children && React.cloneElement(this.props.children, {})}
      </div>
    )
  }
}

export default Layout;
