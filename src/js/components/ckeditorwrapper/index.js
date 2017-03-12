import React from 'react';

class CKEditorWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ckeditor: undefined,
      ckmainlistener: undefined
    };
    this.ckeditorOnChange = this._ckeditorOnChange;
  }

  componentDidMount(){
    console.log('componentDidMount', CKEDITOR.instances['ckeditor-react']);
    const config = {
      height: '50vh',
      toolbar: [
        {name: 'basicstyles', items: ['Bold','Italic','Strike','-','RemoveFormat']},
        {name: 'paragraph', items: ['NumberedList','BulletedList','-','Outdent','Indent']},
        {name: 'styles', items: ['Format']},
        {name: 'insert', items: ['Image']},
        {name: 'document', items: ['Source']}
      ],
      removePlugins: 'maigcline'
    };

    CKEDITOR.replace('ckeditor-react', config);
    this.state.ckmainlistener = CKEDITOR.on("instanceReady", (event) => {
      //CKeditor ready
      const ckeditor = event.editor;
      this.state.ckeditor = ckeditor;
      this.state.ckeditor.changeListener =  this.state.ckeditor.on('change', () => this.ckeditorOnChange());
      if(this.props.loadValue){
        this.state.ckeditor.setData(this.props.loadValue)
      }
    });
  }

  componentWillUnmount(){
    if(this.state.ckmainlistener){
      this.state.ckmainlistener.removeListener('instanceReady');
    }
    if(this.state.ckeditor && this.state.ckeditor.changeListener){
      this.state.ckeditor.changeListener.removeListener('change');
    }
    CKEDITOR.instances['ckeditor-react'].destroy(true);
  }

  _ckeditorOnChange() {
    if(this.props.onChange) {
      this.props.onChange(this.state.ckeditor.getData());
    }
  }

  render(){
    return (
      <textarea name='ckeditor-react'></textarea>
    )
  }
}

export default CKEditorWrapper;
