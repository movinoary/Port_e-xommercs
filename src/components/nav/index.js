import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ButtonNormal } from "..";
import "./style.css";

const Nav = () => {
  const history = useHistory();

  function SignIn() {
    history.push("/sign-in");
  }

  return (
    <nav className="nav-row">
      <Link className="nav-title" to="/">
        <i className="fas fa-laptop-code" />
        <h1>e-ComLap</h1>
      </Link>
      <form className="nav-search">
        <input type="search" />
        <button>
          <i className="fas fa-search" />
        </button>
      </form>
      <div className="nav-button">
        <ButtonNormal
          click={SignIn}
          title="Sign In / Sing Up"
          icon="fas fa-sign-in-alt"
        />
      </div>
    </nav>
  );
};

export default Nav;
