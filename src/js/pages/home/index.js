import React from 'react';
import BlogList from '../../components/bloglist';
import RemoveDlg from '../../components/removedlg';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';


const Home = (props) => (
  <div>
    <BlogList {...props.BlogList} {...props.Actions}/>
    <RemoveDlg
      blog={ props.Blog.Blog }
      open={ props.App.remove_dlg_open }
      handleClose= { props.Actions.closeRemoveDlg }
      handleOK= { props.Actions.removeBlog }
    />
  </div>
)

const mapStateToProps = (state) => {
  return {...state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      Actions: bindActionCreators({
        ...Actions
      }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
