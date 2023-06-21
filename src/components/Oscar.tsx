type oscarprops = {
    children: React.ReactNode
}
export const Oscar = (props:oscarprops) => {
    return (
        <div>
            <h2>{props.children}</h2>
        </div>
    );
}