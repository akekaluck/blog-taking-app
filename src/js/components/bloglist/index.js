import React from 'react';

import BlogItem from './components/blogItem';
import FilterMenu from './components/filtermenu';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

class BlogList extends React.Component {
  render(){
    const { showEditBlogPage, showRemoveDlg, blogs, onRead, showBlogDetailPage, showAddBlogPage } = this.props;
    const { remove_dlg_open, closeRemoveDlg, removeBlog, sortBy, changefilter } = this.props;
    return (
      <div className="blog-list-container">
        <Paper className="paper">
          <Toolbar>
            <ToolbarGroup>
              <FilterMenu sortBy={ sortBy } onChange={ changefilter }/>
            </ToolbarGroup>
            <ToolbarGroup>
              <RaisedButton label="Add" primary={true}  className="add-button"
                onClick={showAddBlogPage}
              >
              </RaisedButton>
            </ToolbarGroup>
          </Toolbar>
          <div className="blog-screen-container">
            {
              blogs.map((blog, index)=>(
                <BlogItem key={index} { ...blog }
                  showEditBlogPage={showEditBlogPage}
                  onRemove={showRemoveDlg}
                  showBlogDetailPage={showBlogDetailPage}
                />
              ))
            }
          </div>
        </Paper>
      </div>
    )
  }
}

BlogList.propTypes = {
  showEditBlogPage: React.PropTypes.func.isRequired,
  showRemoveDlg: React.PropTypes.func.isRequired,
  showBlogDetailPage: React.PropTypes.func.isRequired,
  showAddBlogPage: React.PropTypes.func.isRequired,
  closeRemoveDlg: React.PropTypes.func.isRequired,
  removeBlog: React.PropTypes.func.isRequired
}

export default BlogList;
