import React from 'react';

import BlogItem from './components/blogItem';
import FilterMenu from './components/filtermenu';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import SubHeader from '../subheader';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

class BlogList extends React.Component {
  render(){
    const { showEditBlogPage, showRemoveDlg, blogs, onRead, showBlogDetailPage, showAddBlogPage } = this.props;
    const { remove_dlg_open, closeRemoveDlg, removeBlog, sortBy, changefilter, historyGoBack } = this.props;
    const toolbarGroups = [
      <ToolbarGroup key={0}>
        <FilterMenu sortBy={ sortBy } onChange={ changefilter }/>
      </ToolbarGroup>,
      <ToolbarGroup key={1}>
        <RaisedButton label="Add" primary={true}  className="add-button"
          onClick={showAddBlogPage}
        >
        </RaisedButton>
      </ToolbarGroup>
    ];

    return (
      <SubHeader
        toolbarGroups={toolbarGroups}
        showBackButton={ false }
        historyGoBack={historyGoBack}
      >
        {
          blogs.map((blog, index)=>(
            <BlogItem key={index} { ...blog }
              showEditBlogPage={showEditBlogPage}
              onRemove={showRemoveDlg}
              showBlogDetailPage={showBlogDetailPage}
            />
          ))
        }
      </SubHeader>
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
