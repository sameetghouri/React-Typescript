import { ProfileProps } from './Profile'
type privateprops={
    isLoggedIn:boolean,
    Component: React.ComponentType<ProfileProps>
}
export const Private =({isLoggedIn,Component}:privateprops)=>{
    if (isLoggedIn){
        return <Component name='ali'/>
    }
    return (
        <div>Login to continue</div>
    )
}