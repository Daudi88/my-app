import React, { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../provider/UserProvider";

const HomeView = () => {
  const history = useHistory();
  const [username] = useContext(UserContext);
  return (
    <div>
      <h1>Home View!</h1>
      <h2>Your name is {username}</h2>
      <button onClick={() => history.push("/details")}>Go to Details</button>
    </div>
  );
};

export default HomeView;
