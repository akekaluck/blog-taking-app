import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import BackHome from 'material-ui/svg-icons/image/navigate-before';
import EditMode from 'material-ui/svg-icons/editor/mode-edit';
import Delete from 'material-ui/svg-icons/action/delete';
import { IndexLink } from 'react-router';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

const SubHeader = (props) => (
  <div className="blog-list-container">
    <Paper className="paper">
    <Toolbar>
      <ToolbarGroup>
        <IconButton>
          <IndexLink to={'/'}>
            <BackHome />
          </IndexLink>
        </IconButton>
      </ToolbarGroup>
      {
        props.showRightButtons ?
            <ToolbarGroup>
              <IconButton>
                <IndexLink to={'/edit/'+ props.Blog.id }>
                  <EditMode />
                </IndexLink>
              </IconButton>
              <IconButton
                onClick={ props.onRemove }
              >
                <Delete />
              </IconButton>
            </ToolbarGroup>
          :''
      }
    </Toolbar>
    <div className="blog-screen-container">
      { props.children }
    </div>
    </Paper>
  </div>
)

SubHeader.propTypes = {
  showRightButtons: React.PropTypes.bool,
  Blog: React.PropTypes.object.isRequired,
  onRemove: React.PropTypes.func
}

export default SubHeader;
