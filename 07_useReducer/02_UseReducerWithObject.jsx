const initialState = { val: 0 };
const counterReducer = (state: { val: number }, action: { type: string }) => {
  switch (action.type) {
    case "INCREASE":
      return { val: state.val + 1 };
    case "DECREASE":
      return { val: state.val - 1 };
    case "RESET":
      return { val: 0 };
    default:
      return state;
  }
};

export default function UseReducer() {
  const [count, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div className="w-fit mx-auto text-center my-10">
      <h1>{count.val}</h1>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: "DECREASE" })}
          className="mx-2 bg-black text-stone-200 py-2 px-4 rounded-lg"
        >
          Decrease
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "RESET" })}
          className="mx-2 bg-black text-stone-200 py-2 px-4 rounded-lg"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "INCREASE" })}
          className="mx-2 bg-black text-stone-200 py-2 px-4 rounded-lg"
        >
          Increase
        </button>
      </div>
    </div>
  );
}
