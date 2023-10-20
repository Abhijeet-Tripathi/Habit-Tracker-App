import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDone, toggleNotDone } from '../redux/trackAction'; // Replace with your actual actions import
import styles from '../cssModules/Track.module.css';
import { NavLink } from 'react-router-dom';

export default function Track() {
  const dispatch = useDispatch();

  // Correctly reference state keys from trackReducer
  const habitDays = useSelector(state => state.track.habitDays);
  const done = useSelector(state => state.track.done);
  const notdone = useSelector(state => state.track.notdone);
  //the days of week
  const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  
  const ansArray=[];
  let todayDAY=new Date().getDay();
 
  //This Function fills the Array With current weeks Date
  const getDateArray=()=>{
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const today = new Date();
    if(todayDAY===1){
      // generate a serial i.e next 6 days
      for (let i = 0; i <=6; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    ansArray.push(nextDate.toLocaleDateString('en-GB', options));
    }
  }
   if(todayDAY>1  &&  todayDAY<7){
      let back=todayDAY;        
          // previous "back"no.of days including Today
          for (let i = 0; i <back; i++) {
          const previousDate = new Date(today);
          previousDate.setDate(today.getDate() - i);
           ansArray.push(previousDate.toLocaleDateString('en-GB', options));
          }
          ansArray.reverse();
          
          
      let front=todayDAY;
          // next 7-front no.of days Excluding Today
          for (let i = 1; i <=7-front; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            ansArray.push(nextDate.toLocaleDateString('en-GB', options));
            }
          //store the date--> front++; next "todayDay-back" days
      
    }
  if(todayDAY===7){
      //generate a serial from back to front i.e previous 6days
    for (let i = 0; i <=6; i++) {
    const previousDate = new Date(today);
    previousDate.setDate(today.getDate() - i);
    ansArray.push(previousDate.toLocaleDateString('en-GB', options));
  
    }
        
    }
  }
  getDateArray();

  return (
  <>
    <h2>Week Status:({habitDays}/7)</h2>
    <div className={styles.outterContainer}>  
      {days.map((day, index) => (

        <div key={index} className={styles.innerContainer}>
        <p><u>{day}</u></p>
        <p>({ansArray[index]})</p>
        <div className={styles.trackBtn}>
          {/* Conditional rendering for Done Button */}
          {done[index]
           ?(<img src="https://cdn4.iconfinder.com/data/icons/essentials-71/24/040_-_Tick-64.png"
              alt="Done"
            onClick={()=>dispatch(toggleDone(index,'inc'))}
              />)
          :(<img src="https://cdn4.iconfinder.com/data/icons/essentials-74/24/040_-_Tick-64.png"
             alt="UnDone"
            onClick={()=>dispatch(toggleDone(index,'dec'))}
            />)}
          {/* Conditional rendering for None Button */}
          {done[index]
          ?(<img src='https://cdn0.iconfinder.com/data/icons/pinpoint-notifocation/48/none-64.png'
          alt="None"/>)
          :(<></>)}
          {/* Conditional rendering for Not-Done Button */}
          {notdone[index] ? (
            <img
              src="https://cdn4.iconfinder.com/data/icons/essentials-71/24/039_-_Cross-64.png"
              onClick={()=>dispatch(toggleNotDone(index,done[index]))}
              alt="not-done"
            />
          ) : (
            <img
              src="https://cdn4.iconfinder.com/data/icons/essentials-74/24/039_-_Cross-64.png"
              onClick={()=>dispatch(toggleNotDone(index,done[index]))}
              alt="not-done"
            />
          )}

        </div>
    </div>
      ))}

            <NavLink to ="/">
            <button className={styles.backBtn}>Go Back</button>
            </NavLink>
      
           
    </div>
      </>
  );
}


