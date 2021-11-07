// import {  } from "react";

export const Card = (props) => {
  const show = props.show;
  const toggleShowHandler = () => {
    props.showHandler(props.id);
  };
  return (
    <div className="card">
      {!props.match ? (
        <div
          className={show ? "flip-card-inner card-clicked" : "flip-card-inner"}
          onClick={!show && props.showCount !== 2 ? toggleShowHandler : null}
        >
          {!show && <div className="flip-card-front">Guess</div>}
          {show && <div className="flip-card-back">{props.num}</div>}
        </div>
      ) : (
        <div className="flip-card-inner"></div>
      )}
    </div>
  );
};
