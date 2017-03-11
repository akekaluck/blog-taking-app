import React from 'react';
import { IndexLink } from 'react-router';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

class BlogEdit extends React.Component {
  render(){
    const { Blog, ErrorText, params, addBlog } = this.props;
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
            onChange={ (e) => Blog.title = e.target.value }
            errorText={ ErrorText.title }
            fullWidth={true}
          />
          <DatePicker
            floatingLabelText="Post date"
            floatingLabelFixed={true}
            defaultDate={ Blog.date }
            onChange={ (e, date) => Blog.date = date }
            errorText={ ErrorText.date }
            fullWidth={true}
          />
          <TextField
            floatingLabelText="Content"
            floatingLabelFixed={true}
            defaultValue={ Blog.content }
            onChange={ (e) => Blog.content = e.target.value }
            errorText={ ErrorText.content }
            fullWidth={true}
          />
          <RaisedButton label={label} primary={true}
            onClick={ () => addBlog(Blog) }
          />
        </Paper>
      </div>
    )
  }
}

export default BlogEdit;
