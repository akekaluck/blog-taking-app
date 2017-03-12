import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import striptags from 'striptags';

const SplitContentItem = (props) => {
  const content = striptags(props.content).replace('&nbsp;','').split(/\n|\r\n/,-1).filter((line)=> line.length > 0 );
  console.log(content);
  return (
    <div>{ content.slice(0,1).join('\n') }</div>
  )
}

const BlogItem = (props) => (
  <div className="blog-item">
    <Paper className="blog-item-paper" onClick={(e) => {
      e.stopPropagation();
      props.showBlogDetailPage(props)
    }}>
      <div className="header">
        <div className="blog-item-title" >{ props.title }</div>
        <div className="blog-item-remove-btn">
          <RaisedButton label="Edit" primary={true} onClick={ (e) => {
            e.stopPropagation();
            props.showEditBlogPage(props);
          }} />
          <RaisedButton label="Remove" secondary={true} onClick={ (e) => {
            e.stopPropagation();
            props.onRemove(props);
          }} />
        </div>
      </div>
      <div className="blog-item-content"> <SplitContentItem content={props.content}/> </div>
      <div className="blog-item-footer">
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
