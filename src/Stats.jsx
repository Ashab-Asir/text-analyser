export default function Stats({
  numberOfCharacter,
  linkedinCharacterLeft,
  twitterCharacterLeft,
  numberOfWord,
}) {
  return (
    <section className="stats">
      <Stat lable={"Words"} number={numberOfWord}></Stat>
      <Stat lable={"Character"} number={numberOfCharacter}></Stat>
      <Stat lable={"Linkedin"} number={linkedinCharacterLeft}></Stat>
      <Stat lable={"Twitter"} number={twitterCharacterLeft}></Stat>
    </section>
  );
}

function Stat({ number, lable }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{lable}</h2>
    </section>
  );
}
