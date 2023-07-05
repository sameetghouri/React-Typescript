import { useState, useEffect,useRef } from "react";

export const MutableRef = () => {
    const [timer,settimer]=useState(0)
    const intervalRef=useRef<number|null>(null)

    const stopTimer=()=>{
        if(intervalRef.current){
            window.clearInterval(intervalRef.current)
        }
    }

    useEffect(()=>{
        intervalRef.current=window.setInterval(()=>{
            settimer(timer=>timer+1)
        },1000) 

    //when the component unmounts below code will run
        return ()=>{
            stopTimer()
        }
    },[])
    return (
        <div style={{margin:'20px'}}>
            Mutable Ref Timer : {timer} 
            <br/>
            <button onClick={()=>stopTimer()}>Stop Timer</button>
        </div>
    )
}