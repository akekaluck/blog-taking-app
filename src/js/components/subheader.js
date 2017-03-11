import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import BackHome from 'material-ui/svg-icons/navigation/chevron-left';
import EditMode from 'material-ui/svg-icons/editor/mode-edit';
import Delete from 'material-ui/svg-icons/action/delete';
import { IndexLink } from 'react-router';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

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
              <IconButton>
                <IndexLink to={'/'}>
                  <Delete />
                </IndexLink>
              </IconButton>
            </ToolbarGroup>
          :''
      }
    </Toolbar>
    { props.children }
    </Paper>
  </div>
)

export default SubHeader;
