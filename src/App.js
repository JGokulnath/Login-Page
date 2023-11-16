import React, { useContext } from "react";
import Wrapper from "./Components/UI/Wrapper";
import MainHeader from "./Components/MainHeader/MainHeader";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import AuthContext from "./Components/Store/auth-context";
function App() {
  const ctx = useContext(AuthContext);
  return (
    <Wrapper>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </Wrapper>
  );
}

export default App;
