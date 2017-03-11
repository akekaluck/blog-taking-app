import React from 'react';

import BlogItem from './components/blogItem';
import RemoveDlg from './components/remove_dlg';

import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class BlogList extends React.Component {
  render(){
    const { showEditBlogPage, showRemoveDlg, blogs, onRead, showBlogDetailPage, showAddBlogPage } = this.props;
    const { remove_dlg_open, closeRemoveDlg, removeBlog } = this.props;
    return (
      <div className="blog-list-container">
        <Paper className="paper">
          {
            blogs.map((blog, index)=>(
              <BlogItem key={index} { ...blog }
                showEditBlogPage={showEditBlogPage}
                onRemove={showRemoveDlg}
                showBlogDetailPage={showBlogDetailPage}
              />
            ))
          }
        </Paper>
        <FloatingActionButton className="add-button"
          onClick={showAddBlogPage}
        >
          <ContentAdd />
        </FloatingActionButton>

        <RemoveDlg
          open={ remove_dlg_open }
          handleClose= { closeRemoveDlg }
          handleOK= { removeBlog }
        />
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
