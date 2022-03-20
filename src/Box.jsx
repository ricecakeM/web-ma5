import "./styles.css";

const Box = ({ idx, boxState, setBoxState }) => {
  return (
    <div
      className={`box ${boxState[idx] === 0 ? "white-box" : "black-box"}`}
      onClick={() => {
        const newBoxState = [...boxState];
        newBoxState[idx] = 1 - newBoxState[idx];
        // console.log(newBoxState);
        setBoxState(newBoxState);
      }}
    ></div>
  );
};

export default Box;
