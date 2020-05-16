const ADD_POSITION = "ADD_POSITION";
export function addPosition(item) {
  return {
    type: ADD_POSITION,
    item,
  };
}

const DEL_POSITION = "DEL_POSITION";
export function delPosition(index = null) {
  return {
    type: DEL_POSITION,
    index,
  };
}

const initPositions = [
  {
    numPosition: 1,
    name: "Товар",
    scaling: "1/1",
    count: 1,
    price: 10,
    pku: true,
    capacity: 5,
    location: "",
    store: "",
    discount: "Весна",
  },
];

export default (prevState = initPositions, action) => {
  switch (action.type) {
    case ADD_POSITION:
      const numPosition = prevState.length + 1;
      return [...prevState, { ...action.item, numPosition }];
    case DEL_POSITION:
      if (action.index >= 0 && action.index < prevState.length) {
        return prevState
          .filter((_, index) => index !== action.index)
          .map((item, index) => ({ ...item, numPosition: index + 1 }));
      } else {
        return prevState;
      }
    default:
      return prevState;
  }
};
