import {useRef,useEffect} from 'react'

export const DomRef = () => {
    const inputRef=useRef<HTMLInputElement>(null!) //null! if you don't want to use opetional chaning like  inputRef.current?.focus()
    useEffect(()=>{
        inputRef.current?.focus()
    },[])
    return (
        <div style={{margin:'10px'}}>
            <label>Foccued by useRef: </label> 
            <input type='text' ref={inputRef}/>
            
        </div>
    );
}