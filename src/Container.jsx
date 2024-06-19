import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

export default function Container() {
  const [text, setText] = useState("");
  const numberOfWord = text.split(/\s+/).filter((word) => word !== "").length;
  const numberOfCharacter = text.length;
  const linkedinCharacterLeft = 3000 - numberOfCharacter;
  const twitterCharacterLeft = 280 - numberOfCharacter;
  return (
    <main className="container">
      <TextArea text={text} setText={setText}></TextArea>
      <Stats
        numberOfCharacter={numberOfCharacter}
        linkedinCharacterLeft={linkedinCharacterLeft}
        twitterCharacterLeft={twitterCharacterLeft}
        numberOfWord={numberOfWord}
      ></Stats>
    </main>
  );
}
