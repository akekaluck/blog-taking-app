import React from 'react';
import SubHeader from '../subheader';

class BlogScreen extends React.Component {
  render(){
    const { Blog } = this.props;
    return (
      <SubHeader Blog={ Blog }
        showRightButtons = { true }
      >
        <div>{ Blog.title }</div>
        <div>{ Blog.date?Blog.date.toString():'-' }</div>
        <div>{ Blog.content }</div>
      </SubHeader>
    )
  }
}

export default BlogScreen;
