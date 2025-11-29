import useLocalStorageHook from "./hooks/useLocalStorageHook";

export default function CustomHook() {
  const [name, setName] = useLocalStorageHook("username", "");

  const [id, setID] = useLocalStorageHook("userID", "");

  return (
    <div className="grid">
      <h1>Custom Hook</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Username: {name}</h2>

      <input
        type="text"
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setID(e.target.value)}
      />
      <h2>User ID: {id}</h2>
    </div>
  );
}
