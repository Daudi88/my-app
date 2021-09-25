import UserProvider from "./provider/UserProvider";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
};

export default App;
