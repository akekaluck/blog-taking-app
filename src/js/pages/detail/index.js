import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import BlogScreen from '../../components/blogscreen';

const DetailPage = (props) => (
  <BlogScreen {...props} {...props.Actions} />
)

const mapStateToProps = (state) => {
  return {...state.Blog}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      Actions: bindActionCreators({
        ...Actions
      }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
