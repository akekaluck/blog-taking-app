import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions';

import BlogItem from './components/blogItem';
import RemoveDlg from './components/remove_dlg';

import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export class BlogList extends React.Component {
  render(){
    const { onEdit, onShowRemoveDlg, blogs, onRead, onDetail, onAdd } = this.props;
    const { remove_dlg_open, onRemoveDlgClose, onRemoveBlog } = this.props;
    return (
      <div className="blog-list-container">
        <Paper className="paper">
          {
            blogs.map((blog, index)=>(
              <BlogItem key={index} { ...blog }
                onEdit={onEdit}
                onRemove={onShowRemoveDlg}
                onDetail={onDetail}
              />
            ))
          }
        </Paper>
        <FloatingActionButton className="add-button"
          onClick={onAdd}
        >
          <ContentAdd />
        </FloatingActionButton>

        <RemoveDlg
          open={ remove_dlg_open }
          handleClose= { onRemoveDlgClose }
          handleOK= { onRemoveBlog }
        />
      </div>
    )
  }
}

BlogList.propTypes = {
  onEdit: React.PropTypes.func ,
  onEdit: React.PropTypes.func.isRequired,
  onShowRemoveDlg: React.PropTypes.func,
  onShowRemoveDlg: React.PropTypes.func.isRequired,
  onDetail: React.PropTypes.func,
  onDetail: React.PropTypes.func.isRequired,
  onAdd: React.PropTypes.func,
  onAdd: React.PropTypes.func.isRequired,
  onRemoveDlgClose: React.PropTypes.func,
  onRemoveDlgClose: React.PropTypes.func.isRequired,
  onRemoveBlog: React.PropTypes.func,
  onRemoveBlog: React.PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {...state.BlogList}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      ...bindActionCreators({
        ...Actions
      }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
