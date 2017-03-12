import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import striptags from 'striptags';

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
      <div className="blog-item-content">{ striptags(props.content).replace('&nbsp;','') }</div>
      <div className="blog-item-footer">
        <div className="blog-item-readmore">
          <a onClick={() => props.showBlogDetailPage(props)} >Read more</a>
        </div>
        <div className="blog-item-date">{ props.date.toString() }</div>
      </div>
    </Paper>
  </div>
)

BlogItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  date: React.PropTypes.object.isRequired,
  showEditBlogPage: React.PropTypes.func.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  showBlogDetailPage: React.PropTypes.func.isRequired
}

export default BlogItem;
