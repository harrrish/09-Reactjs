const initialState = { val: 0 };
const counterReducer = (
  state: { val: number },
  action: { type: string, payload?: number },
) => {
  switch (action.type) {
    case "INCREASE":
      return { val: state.val + (action.payload || 1) };
    case "DECREASE":
      return { val: state.val - (action.payload || 1) };
    case "RESET":
      return { val: 0 };
    default:
      return state;
  }
};

export default function UseReducer() {
  const [count, dispatch] = useReducer(counterReducer, initialState);
  const [payloadValue, setPayloadValue] = useState < number > 0;

  return (
    <div className="w-fit mx-auto text-center my-10">
      <div className="w-fit mx-auto text-center my-5">
        <input
          type="number"
          placeholder="Enter a number as payload"
          value={payloadValue > 0 ? payloadValue : "Enter a value as payload"}
          className="border-2 text-center"
          onChange={(e) => setPayloadValue(Number(e.target.value))}
        />
      </div>
      <h1>{count.val}</h1>
      <div className="w-fit mx-auto text-center my-5">
        <button
          type="button"
          onClick={() => dispatch({ type: "DECREASE", payload: payloadValue })}
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
          onClick={() => dispatch({ type: "INCREASE", payload: payloadValue })}
          className="mx-2 bg-black text-stone-200 py-2 px-4 rounded-lg"
        >
          Increase
        </button>
      </div>
    </div>
  );
}
