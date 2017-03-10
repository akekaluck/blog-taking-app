import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions';
import { IndexLink } from 'react-router';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

class BlogEdit extends React.Component {
  render(){
    const { Blog, ErrorText, params} = this.props;
    const label = params.id?'Save':'Add';
    return (
      <div className="blog-list-container">
        <Paper className="paper">
          <div>
            <IndexLink to={'/'}>Back</IndexLink>
          </div>
          <TextField
            floatingLabelText="Title"
            floatingLabelFixed={true}
            defaultValue={ Blog.title }
            errorText={ ErrorText.title }
            fullWidth={true}
          />
          <DatePicker
            floatingLabelText="Post date"
            floatingLabelFixed={true}
            defaultDate={ Blog.date }
            fullWidth={true}
          />
          <TextField
            floatingLabelText="Content"
            floatingLabelFixed={true}
            defaultValue={ Blog.content }
            errorText={ ErrorText.content }
            fullWidth={true}
          />
          <RaisedButton label={label} primary={true} />
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state.Blog }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      ...bindActionCreators({
        ...Actions
      }, dispatch)
    }
}

export default connect(mapStateToProps)(BlogEdit);
