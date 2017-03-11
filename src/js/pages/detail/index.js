import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import RemoveDlg from '../../components/removedlg';
import BlogScreen from '../../components/blogscreen';

const DetailPage = (props) => (
  <div>
    <BlogScreen {...props.Blog} {...props.Actions} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
