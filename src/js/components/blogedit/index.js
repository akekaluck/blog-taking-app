import React from 'react';
import { IndexLink } from 'react-router';

import SubHeader from '../subheader';

import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import Editor from '../editor';
import CKEditorWrapper from '../ckeditorwrapper';

require('./style.less');

const ContentErrorMsg = (props) => {
  let className = 'content-msg';
  if (props.content) {
    className += ' error';
  }
  return (
    <div className={className}> { props.content }</div>
  )
}

class BlogEdit extends React.Component {
  render(){
    const { Blog, ErrorText, params, addBlog } = this.props;
    const label = params.id?'Save':'Add';
    const toolbarGroups = [];
    return (
      <SubHeader
        toolbarGroups={toolbarGroups}
        showBackButton={ true }
      >
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
          <br />
          <ContentErrorMsg content={ ErrorText.content } />
          <CKEditorWrapper
            loadValue = { Blog.content }
            onChange = { (html) => Blog.content = html }
          />
          <div className="blog-edit-button-container">
            <RaisedButton label={label} primary={true}
              onClick={ () => addBlog(Blog) }
            />
          </div>
      </SubHeader>
    )
  }
}

BlogEdit.propTypes = {
  Blog: React.PropTypes.object.isRequired,
  ErrorText: React.PropTypes.object.isRequired,
  params: React.PropTypes.object,
  addBlog: React.PropTypes.func.isRequired,
}

export default BlogEdit;
