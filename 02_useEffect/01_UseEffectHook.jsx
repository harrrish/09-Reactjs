import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

// Now, define the main `User` type, which includes the nested types
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export default function UseEffect() {
  const [users, setUsers] = useState<User[]>([]);
  const [countDown, setCountDown] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | boolean>(false);

  const fetchData = async () => {
    try {
      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.data) {
        setLoading(false);
        setError(false);
        setUsers(response.data);
      }
    } catch (err: unknown) {
      console.log(err);
      const error = err as AxiosError;
      setLoading(false);
      setUsers([]);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (countDown === 0) fetchData();
    else {
      const interval = setInterval(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [countDown]);

  return (
    <div>
      <h1 className="text-center my-6">
        {countDown === 0 ? "LIST OF USERS" : `CountDown: ${countDown}`}
      </h1>
      <h1 className="text-center my-6">{loading ? "LOADING USERS..." : ""}</h1>
      <h1 className="text-center my-6">{error ? error : ""}</h1>
      <div className="flex flex-wrap w-3/4 mx-auto my-6">
        {users.map((user) => {
          return (
            <div key={user.id} className="flex flex-col my-2 mx-auto">
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
              <h1>{user.website}</h1>
              <h1>{user.address.zipcode}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
