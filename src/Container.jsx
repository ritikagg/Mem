import { useCallback, useEffect, useState } from "react";
import { Card } from "./Card";

let cards = [
  {
    id: 1,
    num: 1,
    match: false
  },
  {
    id: 2,
    num: 2,
    match: false
  },
  {
    id: 3,
    num: 3,
    match: false
  },
  {
    id: 4,
    num: 2,
    match: false
  },
  {
    id: 5,
    num: 1,
    match: false
  },
  {
    id: 6,
    num: 3,
    match: false
  }
];

const Container = () => {
  const [show, setShow] = useState({
    count: 0,
    visible: {},
    attempt: 0
  });

  const showHandler = (id) => {
    let obj = { ...show };
    obj.count = obj.count + 1;
    obj.visible[id] = true;
    setShow(obj);
  };

  const matchHandler = useCallback((a, b) => {
    console.log(a, b);
    let num_a = cards.filter((i) => i.id === a)[0].num;
    let num_b = cards.filter((i) => i.id === b)[0].num;

    if (num_a === num_b) {
      cards.forEach((element) => {
        if (element.id === a || element.id === b) {
          element.match = true;
        }
      });
    }
    return;
  }, []);

  useEffect(() => {
    const handler = async () => {
      if (show.count === 2) {
        let obj = Object.keys(show.visible);
        matchHandler(Number(obj[0]), Number(obj[1]));
        setTimeout(() => {
          let state = { ...show };
          state.attempt = state.attempt + 1;
          state.count = 0;
          state.visible = {};
          setShow(state);
        }, 1000);
      }
    };
    handler();
  }, [show, matchHandler]);

  return (
    <>
      <h2>Number of Attempts: {show.attempt} </h2>
      <div className="container">
        {cards.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            num={item.num}
            match={item.match}
            showHandler={showHandler}
            show={show.visible[item.id]}
            showCount={show.count}
          />
        ))}
      </div>
    </>
  );
};
export default Container;
