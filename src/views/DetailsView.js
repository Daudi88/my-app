import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../provider/UserProvider";

const DetailsView = () => {
  const history = useHistory();
  const [username, setUsername] = useContext(UserContext);
  const [name, setName] = useState();

  useEffect(() => {});

  return (
    <div>
      <h1>Details View!</h1>
      <h2>Your name is {username}</h2>
      <h3>Change name into {name}?</h3>
      <input onChange={(event) => setName(event.target.value)} />
      <button onClick={() => setUsername(name)}>Change Name</button>
      <button onClick={() => history.push("/")}>Go Home</button>
    </div>
  );
};

export default DetailsView;
