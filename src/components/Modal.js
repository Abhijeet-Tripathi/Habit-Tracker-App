import React, { useState } from "react";
import styles from "../cssModules/Modal.module.css";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/modalAction";

export default function Modal({ closemodal }) {
  const [habitName, setHabitName] = useState("");
  const dispatch = useDispatch(); //We use useDispatch hook To make our work easier

  const handleAddHabit = () => {
    //When we click on ADD button the HAbit gets added to HabitArray through dispatch
    closemodal(); // and modal closes after clicking on ADD
    dispatch(addHabit(habitName)); // Dispatch the addHabit action with the habitName as the payload
    setHabitName(""); //We set the name to default
  };
  return (
    <>
      {/* Below Empty div is added so that we can give modal effect to our input box */}
      <div className={styles.underlay} onClick={closemodal}></div>
      <div className={styles.modalContainer}>
        <h3>Create New Habit Here:-</h3>
        <input
          type="text"
          placeholder="Enter Habit Name..."
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
        ></input>
        <br />
        <button onClick={handleAddHabit}> ADD </button>
      </div>
    </>
  );
}
