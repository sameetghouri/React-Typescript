// type listprops={
//     items:number[] | string[]
//     onClick:(value:string | number)=>void
// }
type listprops<T>={
    items: T[]
    onClick: (value: T) => void
}
export const List=< T extends {id:number,first:string,last:string}>({items,onClick}:listprops<T>)=>{  //OR <T extends {id:number}> || T extend {} means anything
    return(
        <div>
        <h2>List of items</h2>
        {items.map((item,index)=>{
            return(
                <div key={index} onClick={()=>onClick(item)}>{item.id}: {item.first} {item.last}  </div> //here onClick is the callback funtion
            )               
        })}        
        </div>
    )
}