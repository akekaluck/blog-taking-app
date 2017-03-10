import React from 'react';
import Paper from 'material-ui/Paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions';
import { IndexLink } from 'react-router';

class BlogScreen extends React.Component {
  render(){
    const { Blog } = this.props;
    return (
      <div className="blog-list-container">
        <Paper className="paper">
          <div>
            <IndexLink to={'/'}>Back</IndexLink>
          </div>
          <h1>{ Blog.id }</h1>
          <h1>{ Blog.content }</h1>
          <h1>{ Blog.date.toString() }</h1>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.Blog}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      ...bindActionCreators({
        ...Actions
      }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogScreen);
