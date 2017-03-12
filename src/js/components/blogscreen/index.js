import React from 'react';
import SubHeader from '../subheader';
import { ToolbarGroup } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import { IndexLink } from 'react-router';

import EditMode from 'material-ui/svg-icons/editor/mode-edit';
import Delete from 'material-ui/svg-icons/action/delete';

class BlogScreen extends React.Component {
  render(){
    const { Blog, showRemoveDlg } = this.props;
    const toolbarGroups = [
      <ToolbarGroup key={1}>
        <IconButton>
          <IndexLink to={'/edit/'+ Blog.id }>
            <EditMode />
          </IndexLink>
        </IconButton>
        <IconButton onClick={ () => showRemoveDlg(Blog) }>
          <Delete />
        </IconButton>
      </ToolbarGroup>
    ];
    return (
      <SubHeader
        toolbarGroups={toolbarGroups}
        showBackButton = { true }
        onRemove={ () => showRemoveDlg(Blog) }
      >
        <div className="blog-screen-top">
          <div className="blog-screen-title">{ Blog.title }</div>
          <div className="blog-screen-date">{ Blog.date?Blog.date.toString():'-' }</div>
        </div>
        <div className="blog-screen-content">
          <div dangerouslySetInnerHTML={{ __html: Blog.content }} />
        </div>
      </SubHeader>
    )
  }
}

BlogScreen.propTypes = {
  Blog: React.PropTypes.object.isRequired,
  showRemoveDlg: React.PropTypes.func.isRequired,
}

export default BlogScreen;
