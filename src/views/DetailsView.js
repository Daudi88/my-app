import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../provider/UserProvider";

const DetailsView = () => {
  const history = useHistory();
  const [username, setUsername] = useContext(UserContext);

  useEffect(() => {});

  return (
    <div>
      <h1>Details View!</h1>
      <h2>Your name is {username}</h2>
      <button onClick={() => setUsername("David")}>Change Name to David</button>
      <button onClick={() => history.push("/")}>Go Home</button>
    </div>
  );
};

export default DetailsView;
