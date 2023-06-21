type buttonprops = {
    // handleClick: () => void
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id : number) => void
}
export const Button = (props:buttonprops) => {
    return (
        <button onClick={event => props.handleClick(event, 1)}>Click</button> //1 is the id
    );
}