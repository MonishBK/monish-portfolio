'use client'

import { useEffect,useState } from 'react';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export const ProgressSkills = ({percentage,lang}) => {

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    if(window !== "undefined"){
      setShowComponent(true);
    }
},[])

  return (
    showComponent &&
    <>
     <div style={{ width: 110, marginLeft: 0 , height:200 }}>
        <CircularProgressbar value={percentage} 
            text={`${percentage}%`}
            styles={buildStyles({
            // Colors
            pathColor: `#ffb400`,
            textColor: '#fff',
            trailColor: '#252525',
            backgroundColor: '#ffb400',
            })}
         />
        <p className=' py-2 text-center text-uppercase'>{lang}</p>
     </div>
    </>
  )
}
