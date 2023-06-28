import {useRef,useEffect} from 'react'

export const DomRef = () => {
    const inputRef=useRef<HTMLInputElement>(null) //or null! if you don't want to use opetional chaning like  inputRef.current?.focus()
    useEffect(()=>{
        inputRef.current?.focus()
    },[])
    return (
        <div style={{margin:'10px'}}>
            <h4>Foccued by useRef</h4>
            <input type='text' ref={inputRef}/>
            
        </div>
    );
}