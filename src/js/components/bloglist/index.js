import React from 'react';

import BlogItem from './components/blogItem';
import RemoveDlg from './components/remove_dlg';

import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const FilterMenu = (props) => (
  <DropDownMenu value={ props.sortBy } onChange={ props.onChange } >
    <MenuItem primaryText='Sort by date' value= {'Date'} />
    <MenuItem primaryText='Sort by title' value= {'Title'} />
  </DropDownMenu>
)

class BlogList extends React.Component {
  render(){
    const { showEditBlogPage, showRemoveDlg, blogs, onRead, showBlogDetailPage, showAddBlogPage } = this.props;
    const { remove_dlg_open, closeRemoveDlg, removeBlog, sortBy, changefilter } = this.props;
    return (
      <div className="blog-list-container">
        <FilterMenu sortBy={ sortBy } onChange={ changefilter }/>
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
