/**
 *
 * AppBar
 *
 */

import React from "react";
import styles from "./styles.css";
import { Link } from "react-router";
import IconButton from "../IconButton";

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || <Link to="/login">login</Link>;

  return (
    <div className={styles.appBar}>
      <IconButton
        icon="bars"
        button={styles.iconButton}
        iconClass={styles.icon}
        onClick={toggleDrawer}
      />
      <div className={styles.heading}>Coder daily</div>
      <div className={styles.linkContainer}>{loginLink}</div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
  email: React.PropTypes.string,
};

export default AppBar;
