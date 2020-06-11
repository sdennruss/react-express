import axios from "axios";

// export function userCreated(users) {
//   return axios
//     .post("http://localhost:5000/users", users)
//     .then((res) => {
//       console.log("User Signed Up!", res);
//     })
//     .catch((error) => {
//       console.log("This is an Error", error);
//     });
// }

export async function userCreated(users) {
  try {
    await axios.post("/uers", users);
  } catch (ex) {
    if (ex.response && ex.response.status === 404)
      alert("Unexpected Error has occured");
  }
  console.log(users);
}
