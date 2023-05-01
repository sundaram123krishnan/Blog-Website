import React, { Component } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

class ControlledEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      contentState: {}, // ContentState JSON
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onContentStateChange = (contentState) => {
    this.setState({
      contentState,
    });
  };

  render() {
    const { editorState } = this.state;
    const { contentState } = this.state;

    contentState.blocks?.forEach((element) => {
      console.log(element.text);
    });

   

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
            onContentStateChange={this.onContentStateChange}
          />
          <button className="border-2 w-max px-5 py-2 ">ADD</button>
        </form>
      </div>
    );
  }
}

export default ControlledEditor;
