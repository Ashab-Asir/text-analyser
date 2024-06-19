import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ text, setText }) {
  const [warningText, setWarningText] = useState("");
  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarningText("No script tag allowed");
      newText = newText.replace("<script>", "");
    } else {
      setWarningText("");
    }
    setText(newText);
  };
  return (
    <div className="textarea">
      <textarea
        placeholder="Enter your text here..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <Warning warningText={warningText}></Warning>
    </div>
  );
}
