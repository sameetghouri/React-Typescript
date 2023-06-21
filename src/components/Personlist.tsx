import {nam } from './Person.types';
type personlistprops = {
nam:nam[]    
}
export const Personlist=(props:personlistprops)  => {
    return (
        <div>
           {props.nam.map((item)=>{
               return <h2>{item.first} {item.last}</h2>
           })}
        </div>
    );
}  