import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import SearchPage from "./pages/search-page/SearchPage";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [hidden, setHidden] = useState(false);

  const signUp = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
    setOpenRegister(false);
    setHidden(false);
  };

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setOpen(false);
    setHidden(false);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user, username]);

  // console.log("USER >>>>>", user);

  return (
    <div className="App">
      <Router>
        <Header
          open={open}
          setOpen={setOpen}
          openRegister={openRegister}
          setOpenRegister={setOpenRegister}
          password={password}
          setPassword={setPassword}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          signUp={signUp}
          signIn={signIn}
          user={user}
          auth={auth}
          hidden={hidden}
          setHidden={setHidden}
        />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
