import React, { useState } from "react";
import "./signupModal.css";

import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SigupModal = (
  {
    openRegister,
    setOpenRegister,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    signUp,
  },
) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <div className="signupModal">
      <Modal
        open={openRegister}
        onClose={() => setOpenRegister(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="signinModal__form">
            <center>
              <img
                className="signinModal__signUpImage"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/768px-Airbnb_Logo_B%C3%A9lo.svg.png"
                alt="airbnb_logo"
              />
            </center>
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signUp}>Signup</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default SigupModal;
