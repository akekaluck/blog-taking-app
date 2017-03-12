import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import BackHome from 'material-ui/svg-icons/image/navigate-before';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

const SubHeader = (props) => (
  <div className="blog-list-container">
    <Paper className="paper">
    <Toolbar>
      {
        props.showBackButton?
        <ToolbarGroup>
          <IconButton onClick={props.historyGoBack}>
            <BackHome />
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
  showBackButton: React.PropTypes.bool,
  historyGoBack: React.PropTypes.func.isRequired
}

export default SubHeader;
