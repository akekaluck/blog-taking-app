import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const BlogItem = (props) => (
  <div className="blog-item">
    <Paper className="blog-item-paper" onClick={(e) => {
      e.stopPropagation();
      props.showBlogDetailPage(props)
    }}>
      <div className="header">
        <div className="blog-item-title" >{ props.title }</div>
        <div className="blog-item-remove-btn">
          <RaisedButton label="E" primary={true} onClick={ (e) => {
            e.stopPropagation();
            props.showEditBlogPage(props);
          }} />
          <RaisedButton label="X" secondary={true} onClick={ (e) => {
            e.stopPropagation();
            props.onRemove(props);
          }} />
        </div>
      </div>
      <div className="blog-item-content">{ props.content }</div>
      <div className="blog-item-footer">
        <div className="blog-item-readmore">
          <a onClick={() => props.showBlogDetailPage(props)} >Read more</a>
        </div>
        <div className="blog-item-date">{ props.date.toString() }</div>
      </div>
    </Paper>
  </div>
)

export default BlogItem;
