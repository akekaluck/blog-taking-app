import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const BlogItem = (props) => (
  <div className="blog-item">
    <Paper className="blog-item-paper">
      <div className="blog-item-title">{ props.title }</div>
      <div className="blog-item-content">{ props.content }</div>
      <div className="blog-item-date">{ props.date.toString() }</div>
      <div className="blog-item-remove-btn">
        <RaisedButton label="Remove" secondary={true} />
      </div>
    </Paper>
  </div>
)

export class BlogList extends React.Component {
  render(){
    return (
      <div className="blog-list-container">
        <Paper className="paper">
          {
            this.props.blogs.map((blog, index)=>(
              <BlogItem key={index} {...blog} />
            ))
          }
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.App}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      BlgoListActions: bindActionCreators({
        ...Actions
      }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
