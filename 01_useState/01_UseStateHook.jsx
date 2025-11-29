import { useState } from "react";
import UseStateChild from "./UseStateChild";

type Doctor = {
  id: number;
  name: string;
};

type User = {
  firstName: string;
  lastName: string;
};

export default function UseState() {
  const [name, setName] = useState<string>("John Doe");

  // 2. useState with a boolean
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // 3. useState with a number
  const [count, setCount] = useState<number>(0);

  // 4. useState with an object (example: user info)
  const [user, setUser] = useState<User>({
    firstName: "Jane",
    lastName: "Doe",
  });

  // 5. useState with an array of objects with two values (example: list of doctors)
  const [doctors, setDoctors] = useState<Doctor[]>([
    { id: 1, name: "Dr. Smith" },
    { id: 2, name: "Dr. Johnson" },
  ]);

  return (
    <div>
      <hr className="border-black my-2" />
      <h1>String: {name}</h1>
      <hr className="border-black my-2" />
      <h1>Boolean: {isLoggedIn ? "True" : "False"}</h1>
      <hr className="border-black my-2" />
      <h1>Number: {count}</h1>
      <hr className="border-black my-2" />
      <h1>
        Object: {user.firstName} {user.lastName}
      </h1>
      <hr className="border-black my-2" />
      <div className="flex gap-4">
        {doctors.map((doc) => {
          return (
            <div key={doc.id}>
              <h1>{doc.name}</h1>
            </div>
          );
        })}
      </div>
      <hr className="border-black my-2" />
      <UseStateChild
        stringAction={setName}
        booleanValue={isLoggedIn}
        booleanAction={setIsLoggedIn}
        numberValue={count}
        numberAction={setCount}
        objectAction={setUser}
        arrayValues={doctors}
        arrayAction={setDoctors}
      />
    </div>
  );
}
