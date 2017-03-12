import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import BackHome from 'material-ui/svg-icons/image/navigate-before';
import { IndexLink } from 'react-router';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

const SubHeader = (props) => (
  <div className="blog-list-container">
    <Paper className="paper">
    <Toolbar>
      {
        props.showBackButton?
        <ToolbarGroup>
          <IconButton>
            <IndexLink to={'/'}>
              <BackHome />
            </IndexLink>
          </IconButton>
        </ToolbarGroup>
        :''
      }
      {
        props.toolbarGroups.map((toolbar, index) => {
          return toolbar;
        })
      }
    </Toolbar>
    <div className="blog-screen-container">
      { props.children }
    </div>
    </Paper>
  </div>
)

SubHeader.propTypes = {
  toolbarGroups: React.PropTypes.array.isRequired,
  showBackButton: React.PropTypes.bool
}

export default SubHeader;
