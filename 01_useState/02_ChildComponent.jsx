type Doctor = {
  id: number,
  name: string,
};

type User = {
  firstName: string,
  lastName: string,
};

interface UseStateChildProps {
  stringAction: (value: string) => void;
  booleanValue: boolean;
  booleanAction: (value: boolean) => void;
  numberValue: number;
  numberAction: (value: number) => void;
  objectAction: (value: User) => void;
  arrayValues: Doctor[];
  arrayAction: (value: Doctor[]) => void;
}

export default function UseStateChild({
  stringAction,
  booleanValue,
  booleanAction,
  numberValue,
  numberAction,
  objectAction,
  arrayValues,
  arrayAction,
}: UseStateChildProps) {
  return (
    <div>
      <button
        className="border-2 p-4 mx-2 border-black rounded-lg hover:bg-black hover:text-white"
        type="button"
        onClick={() => stringAction("Value Changed")}
      >
        String
      </button>
      <button
        className="border-2 p-4 mx-2 border-black rounded-lg hover:bg-black hover:text-white"
        type="button"
        onClick={() => booleanAction(!booleanValue)}
      >
        Boolean
      </button>
      <button
        className="border-2 p-4 mx-2 border-black rounded-lg hover:bg-black hover:text-white"
        type="button"
        onClick={() => numberAction(numberValue + 1)}
      >
        Number
      </button>
      <button
        className="border-2 p-4 mx-2 border-black rounded-lg hover:bg-black hover:text-white"
        type="button"
        onClick={() => objectAction({ firstName: "Harish", lastName: "S" })}
      >
        Object
      </button>
      <button
        className="border-2 p-4 mx-2 border-black rounded-lg hover:bg-black hover:text-white"
        type="button"
        onClick={() =>
          arrayAction([...arrayValues, { id: 3, name: "Dr.Alpha" }])
        }
      >
        Array
      </button>
    </div>
  );
}
