import React, { Component } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class ControlledEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="flex flex-col items-center justify-center mt-10 gap-10">
        <div className="text-3xl font-bold">
          <h1>Add your blog here</h1>
        </div>
        <form action="" className="flex flex-col items-center">
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
          <button className="border-2 w-max px-5 py-2 ">ADD</button>
        </form>
      </div>
    );
  }
}

export default ControlledEditor;
