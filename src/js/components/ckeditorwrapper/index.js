import React from 'react';

class CKEditorWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ckeditor: undefined
    };
    this.ckeditorOnChange = this._ckeditorOnChange;
  }

  componentDidMount(){
    const config = {
      toolbar: [
        {name: 'basicstyles', items: ['Bold','Italic','Strike','-','RemoveFormat']},
        {name: 'paragraph', items: ['NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote']},
        {name: 'styles', items: ['Styles','Format']},
        {name: 'insert', items: ['Image','Table']},
        {name: 'document', items: ['Source']}
      ],
      removePlugins: 'maigcline'
    };
    CKEDITOR.replace('ckeditor-react', config);
    CKEDITOR.on("instanceReady", (event) => {
      //CKeditor ready
      const ckeditor = event.editor;
      ckeditor.on('change', () => this.ckeditorOnChange());
      this.state.ckeditor = ckeditor;
      if(this.props.loadValue){
        this.state.ckeditor.setData(this.props.loadValue)
      }
    });
  }

  _ckeditorOnChange() {
    if(this.props.onChange) {
      this.props.onChange(this.state.ckeditor.getData());
    }
  }

  render(){
    return (
      <div>
        <textarea name='ckeditor-react'></textarea>
      </div>
    )
  }
}

export default CKEditorWrapper;
