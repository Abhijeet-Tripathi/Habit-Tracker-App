import React from 'react';
import styles from "../cssModules/Home.module.css";
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Home() {
//This Component displays all the habits created
  const habitArray = useSelector((state) => state.modal.habitArray);//here we are using useSelector to access the habitArray
  return (
    <> 
    <div className={styles.homeContainer}>
      {/* Here we are rendering the HabitArray  */}
      {habitArray.length===0?(<h2>Nothing Here yet !</h2>)
      :
      habitArray.map((habit,index)=>(
        <div className={styles.innerContainer} key={index}>
        <p>
          <img src="https://cdn0.iconfinder.com/data/icons/ikonate/48/hash-256.png" alt='number'/>
           Habit : {habit.habitName}
        </p>
        {/* We have given /track route so that we can go to track component on clicking their */}
        <NavLink to="/track">
            <button>Track</button>
        </NavLink>        
      </div>
      ))}
      

      
    </div>
    
    </>
    
  )
}
