type greetprops = {
    nam: string,
    messageCount: number 
    isloggedIn: boolean
}
export const Greet =(props:greetprops)=>{
    return (
        <div>
        <h2>
            {props.isloggedIn ? `Welcome ${props.nam}! You have ${props.messageCount} unread messages` 
            :  'Welcome Guest '}
        </h2>
        </div>
    )
}