import React, { useState } from "react";
import styles from "../cssModules/Navbar.module.css";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false); //useState for conditional rendering

  function closemodal() {
    //function to close the modal
    setShowModal(false);
  }

  return (
    <>
      <div className={styles.flexContainer}>
        <NavLink to="/">
          <h2>HABIT_TRACKER</h2>
        </NavLink>
        <button onClick={() => setShowModal(true)} className={styles.addBtn}>
          + ADD HABIT
        </button>
      </div>
      {/* We are using conditional rendering here so On clicking the btn, The modal becomes visible */}
      {showModal && <Modal closemodal={closemodal} />}
    </>
  );
}
