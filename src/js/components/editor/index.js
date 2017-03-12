import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, RichUtils, AtomicBlockUtils } from 'draft-js';
import BlockStyleControls from './components/blocktypes';
import InlineStyleControls from './components/inlinestyle';
import InlineImageControls from './components/inlineimage';
import Media from './components/media';

require('./aeditor.less');

class AEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this._onChange(editorState);
    this.focus = () => this.refs.editor.focus();
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    this.toggleInlineImage = (newStateAndKey) => this._toggleInlineImage(newStateAndKey);
  }
  _onChange(editorState){
    this.setState({editorState});
    const contentState = editorState.getCurrentContent();
    if(this.props.onChange){
      this.props.onChange(editorState);
    }
  }
  _toggleBlockType(blockType){
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    )
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  _toggleInlineImage({entityKey, newEditorState }) {
    this.onChange(
      AtomicBlockUtils.insertAtomicBlock(
        newEditorState,
        entityKey,
        ' '
      )
    );
  }

  mediaBlockRenderer(block) {
    if (block.getType() === 'atomic') {
      return {
        component: Media,
        editable: false,
      };
    }
    return null;
  }

  render() {
    const {editorState} = this.state;
    return (
      <div className="AEditor-container">
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineImageControls
          editorState={editorState}
          onToggle={this.toggleInlineImage}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div className="editor-container" onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            blockRendererFn= {this.mediaBlockRenderer.bind(this)}
            onChange={this.onChange}
            ref="editor"
          />
        </div>
      </div>
    );
  }
}

export default AEditor;
