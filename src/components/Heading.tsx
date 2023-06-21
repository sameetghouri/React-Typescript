type headingprops = {
    children:string
}
export const Heading = (props:headingprops) => {
    return (
        <div>
            <h2>{props.children}</h2>
        </div>
    );
}