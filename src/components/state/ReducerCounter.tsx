import {useReducer} from 'react'
const initialState={count:0}
type counterstate={count:number}
// type counteraction ={type:string, payload:number}
// type counteraction ={
//     type:'increment' | 'decrement'|'reset', 
//     payload?:number} // ? means not mandatory or optional 

type updatecounteraction ={
    type:'increment' | 'decrement', 
    payload:number
}
type resetcounteraction={
    type:'reset'
}
type counteraction = updatecounteraction | resetcounteraction


function reducer(state:counterstate,action:counteraction){
   switch (action.type){
       case 'increment':
        return {count:state.count+action.payload} // we can use || 0 as well
       case 'decrement':
        return {count:state.count-action.payload} // we can use || 0 as well
       case 'reset':
        return initialState
       default:
        return state
   } 
}

export const ReducerCounter =()=>{
    const [stateA,dispatchS]=useReducer(reducer,initialState)
    return(
        <div>
            <h2>Count is {stateA.count}</h2>
            <button onClick={()=>dispatchS({type:'increment',payload:1})}>Increment 1</button>
            <button onClick={()=>dispatchS({type:'decrement',payload:1})}>Decrement 1</button>
            <button onClick={()=>dispatchS({type:'reset'})}>Reset</button>
        </div>
    )}
