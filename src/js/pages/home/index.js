import React from 'react';
import BlogList from '../../components/bloglist';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';


const Home = (props) => (
  <BlogList {...props} {...props.Actions}/>
)

const mapStateToProps = (state) => {
  return {...state.BlogList}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      Actions: bindActionCreators({
        ...Actions
      }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
