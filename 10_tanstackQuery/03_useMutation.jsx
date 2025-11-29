import { useMutation } from "@tanstack/react-query";

const { mutate, isPending, isError, error } = useMutation({
    mutationFn: signUpUser,
    onError: () => {},
    onSuccess: () => {
      showPopup(true);
    },
  });

return (
<div>
  {isError && <AlertGeneral></AlertGeneral>}

  <button type="button" onClick={() => mutate({ name, email, password })}>
    {isPending ? (
      <h1>Creating...</h1>
    ) : (
      <h1 className="flex items-center gap-2">Create account</h1>
    )}
  </button>
</div>;
)
====================================================================================
import axios from "axios";

export async function signUpUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const val = await axios.post(
      `${url}/signup`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    // console.log(val);
    return val;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      // console.log(e.response);
      throw e.response?.data || `Unable to signup user !!!`;
    } else {
      throw "Unknown error while creating account !!! 😥";
    }
  }
}