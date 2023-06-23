// type listprops={
//     items:number[] | string[]
//     onClick:(value:string | number)=>void
// }
type listprops<T>={
    items: T[]
    onClick: (value: T) => void
}
export const List=< T extends any>({items,onClick}:listprops<T>)=>{  //<T extends {id:number}>
    return(
        <div>
        <h2>List of items</h2>
        {items.map((item,index)=>{
            return(
                <div key={index} onClick={()=>onClick(item)}> <>{item}</> </div> //here onClick is the callback funtion
            )               
        })}        
        </div>
    )
}