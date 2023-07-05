import { profilepropstype } from './Profile'
// export type pptype ={
//     name:string
// }
type privateprops={
    isLoggedIn:boolean,
    PComponent: React.ComponentType<profilepropstype>
}
export const Private =({isLoggedIn,PComponent}:privateprops)=>{
    if (isLoggedIn){
        return <PComponent name='ali'/>
    }
    return (
        <div>Login to continue</div>
    )
}