import {personprops} from './Person.types';
export const Person = (props:personprops) => {
    return (
        <div>
            <h2>{props.nam.first} {props.nam.last}</h2>
        </div>
    );
}