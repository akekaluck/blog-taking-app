import React from 'react';
import Paper from 'material-ui/Paper';
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
          <h1>{ Blog.date?Blog.date.toString():'-' }</h1>
        </Paper>
      </div>
    )
  }
}

export default BlogScreen;
