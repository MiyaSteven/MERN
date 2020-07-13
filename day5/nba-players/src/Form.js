import React from "react";
import ReactDOM from "react-dom";
import UserForm from "./components/UserForm";
import * as serviceWorker from "./serviceWorker";

function UserForm() {
  return (
    <div>
      <UserForm />
    </div>
  );
}

// where does this need to go ~ routing
ReactDOM.render(
  <React.StrictMode>
    <UserForm />
  </React.StrictMode>,
  document.getElementById("userForm")
);

serviceWorker.unregister();

export default UserForm;
