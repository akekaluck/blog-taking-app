import React from 'react';
import AppBar from 'material-ui/AppBar';

class Layout extends React.Component {
  render(){
    let a = {'a':1}
    let b = {...a}
    return (
      <div>
        <AppBar
          title="Blog"
          showMenuIconButton={false}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        {this.props.children && React.cloneElement(this.props.children, {})}
      </div>
    )
  }
}

export default Layout;
