import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const FilterMenu = (props) => (
  <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Sort by date" />
      <MenuItem primaryText="Sort by title" />
    </IconMenu>
)

class Layout extends React.Component {
  render(){
    return (
      <div>
        <AppBar
          title="Blog"
          showMenuIconButton={false}
          iconElementRight = { <FilterMenu />}
        />
        {this.props.children && React.cloneElement(this.props.children, {})}
      </div>
    )
  }
}

export default Layout;
