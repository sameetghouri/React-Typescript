type greetprops = {
    nam: string,
    messagecount?: number  //adding ? so that it do not give error when messageCount is not passed in props
    isloggedIn: boolean
}
export const Greet =(props:greetprops)=>{
    const {messagecount = 0} = props //if no value is passed then it will default to 0
    return (
        <div>
        <h2>
            {props.isloggedIn ? `Welcome ${props.nam}! You have ${props.messagecount} unread messages` 
            :  'Welcome Guest '}
        </h2>
        </div>
    )
}