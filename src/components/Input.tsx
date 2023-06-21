type inputprops = {
    value: string
    handlechange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
export const Input =(props:inputprops)=>{
    const handleinputchange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event)
    }
    return(
        <input type='text' value={props.value} onChange={props.handlechange}/>
        // <input type='text' value={props.value} onChange={handleinputchange}/>
    )
}