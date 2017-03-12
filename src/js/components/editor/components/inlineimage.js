import React from 'react';
import StyleButton from './stylebutton';
import { EditorState } from 'draft-js';

const BLOCK_TYPES = [
  {label: '+IMAGE', style: 'add-inline-image'},
];

class InlineImageControls extends React.Component {
  submitUrl(e){
    e.preventDefault();
    const {editorState, onToggle} = this.props;
    const selection = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'inline-image',
      'IMMUTABLE',
      { src: 'http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers.jpg'}
    )
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(
      editorState,
      { currentContent: contentStateWithEntity }
    )
    if(onToggle){
      onToggle({
        newEditorState,
        entityKey
      })
    }
  }
  render(){
    return (
      <div className="RichEditor-controls">
        <form onSubmit={ this.submitUrl.bind(this) }>
          <input type='text' />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
};

export default InlineImageControls;
