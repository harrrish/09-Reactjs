import { useContext } from "react";
import { MyCustomContext } from "../../context/MyContext";

export default function UseContext() {
  const contextValue = useContext(MyCustomContext);

  return (
    <div className="text-center my-8 bg-sky-300">
      <h1>Parent</h1>
      <h1>Context Value: {contextValue.user.name}</h1>
      <h1>Context Email: {contextValue.user.email}</h1>
      <Child />
    </div>
  );
}

function Child() {
  const contextValue = useContext(MyCustomContext);
  return (
    <div className="text-center my-8 bg-sky-400">
      <h1>Child</h1>
      <h1>Context Phone #: {contextValue.phone}</h1>
      <GrandChild />
    </div>
  );
}

function GrandChild() {
  const contextValue = useContext(MyCustomContext);
  return (
    <div className="text-center my-8 bg-sky-500">
      <h1>Grandchild</h1>
      <h1>Context Items</h1>
      {contextValue.items.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
}
