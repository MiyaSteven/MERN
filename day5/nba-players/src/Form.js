import React from "react";
import ReactDOM from "react-dom";
import UserForm from "./components/UserForm";
import * as serviceWorker from "./serviceWorker";

// Notes on form validations
// function UserForm() {
//   const [name, setName] = useState("");
//   return (
//     <div className="UserForm">
//       <UserForm />
//       <form>
//         <label style={{ color: name.length <= 2 ? "red" : "green" }}>
//           Name:{" "}
//         </label>
//         <input
//           onchange={(event) => {
//             setName(event.target.value);
//           }}
//           type="text"
//         />
//       </form>
//     </div>
//   );
// }

// where does this need to go ~ routing
ReactDOM.render(
  <React.StrictMode>
    <UserForm />
  </React.StrictMode>,
  document.getElementById("userForm")
);

serviceWorker.unregister();

export default UserForm;
