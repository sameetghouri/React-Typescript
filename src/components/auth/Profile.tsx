export type profilepropstype ={
    name:string
}
export const Profile =({name}:profilepropstype)=>{
    return(
        <div>
            Private Profile Component. Name is {name}
        </div>
    )
}