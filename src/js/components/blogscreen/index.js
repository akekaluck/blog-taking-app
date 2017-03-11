import React from 'react';
import SubHeader from '../subheader';

class BlogScreen extends React.Component {
  render(){
    const { Blog, showRemoveDlg } = this.props;
    return (
      <SubHeader Blog={ Blog }
        showRightButtons = { true }
        onRemove={ () => showRemoveDlg(Blog) }
      >
        <div className="blog-screen-container">
          <div className="blog-screen-top">
            <div className="blog-screen-title">{ Blog.title }</div>
            <div className="blog-screen-date">{ Blog.date?Blog.date.toString():'-' }</div>
          </div>
          <div className="blog-screen-content">{ Blog.content }</div>
        </div>
      </SubHeader>
    )
  }
}

BlogScreen.propTypes = {
  Blog: React.PropTypes.object.isRequired,
  showRemoveDlg: React.PropTypes.func.isRequired,
}

export default BlogScreen;
