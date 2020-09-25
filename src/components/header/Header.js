import React from "react";
import "./header.css";

import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import SigninModal from "../modal/signin/SigninModal";
import SignupModal from "../modal/signup/SigupModal";

const Header = (
  {
    open,
    setOpen,
    openRegister,
    setOpenRegister,
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    signUp,
    signIn,
    user,
    auth,
    hidden,
    setHidden,
  },
) => {
  const handleToggle = (e) => {
    setHidden(!hidden);
    // console.log(hidden);
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/768px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="airbnb_logo"
        />
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Became a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar
          className="headerRight__avatar"
          onClick={handleToggle}
          src={user?.photoUrl}
          alt={user?.displayName}
        />
        <SigninModal
          open={open}
          setOpen={setOpen}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          signIn={signIn}
        />
        <SignupModal
          openRegister={openRegister}
          setOpenRegister={setOpenRegister}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          signUp={signUp}
        />
        {hidden && <div className="headerRight__signin">
          {user
            ? <p
              onClick={() => {
                auth.signOut();
                setHidden(false);
              }}
            >
              Sign out
            </p>
            : (<>
              <p onClick={() => setOpenRegister(true)}>Sign up</p>
              <p onClick={() => setOpen(true)}>Sign in</p>
            </>)}
          <hr />
          <p>Help</p>
        </div>}
      </div>
    </div>
  );
};

export default Header;
