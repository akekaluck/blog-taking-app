import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const FilterMenu = (props) => (
  <DropDownMenu value={ props.sortBy } onChange={ props.onChange } >
    <MenuItem primaryText='Sort by date' value= {'Date'} />
    <MenuItem primaryText='Sort by title' value= {'Title'} />
  </DropDownMenu>
)

FilterMenu.propTypes = {
  sortBy: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
}

export default FilterMenu;
