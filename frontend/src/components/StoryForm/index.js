import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

const StoryForm = () => {
	// draftjs editor state
	const [editorState, setEditorState] = React.useState(() =>
		EditorState.createEmpty()
	);

	return <Editor editorState={editorState} onChange={setEditorState} placeholder="Write your heart out" />;
};

export default StoryForm;
